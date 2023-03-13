/**
 *
 * MIT License
 *
 * Copyright 2021 Shogun, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import * as React from 'react'
import { useTheme } from '@chakra-ui/react'

import Container from 'Components/Container'
import Image from 'Components/Image'
import { useNormalizedProduct } from 'Components/Hooks'
import { getArrayNodesReplaced, getMatchesFromString, uniqueId } from 'Components/Utils'

/**
 * @typedef { import("lib/types").ProductMediaItem } ProductMediaItem
 * @type { ProductMediaItem }
 */
const defaultMediaItem = {
  id: uniqueId(),
  name: 'Default Image',
  src: 'https://f.shgcdn.com/3e439e58-55b0-417d-8475-9b8db731b619/',
  width: 720,
  height: 480,
}

/**
 * @typedef { import("lib/types").CmsProduct } CmsProduct
 * @typedef { import("lib/types").Product } Product
 * @typedef { import("lib/types").PropsOf<Image>['loading'] } LoadingOptions
 * @typedef {{
 *  product: CmsProduct
 *  imageLoading: LoadingOptions
 * }} ProductGridItemProps
 * @param { ProductGridItemProps } props
 */
const CustomizerProductGridItem = ({
  imageLoading,
  product: cmsProduct,
  productList,
  setProductModalOpen,
  setSelectedProduct,
  updateImage,
  updateDisplayName,
}) => {
  const product = useNormalizedProduct(cmsProduct)
  if (!product) throw new Error(`Expected product but got ${product}`)

  const {
    name,
    media,
    variants: [firstVariant],
    searchResult,
  } = product

  const theme = useTheme()
  const firstImage = media?.length > 0 ? media[0] : defaultMediaItem
  const { src, width = 720, height = 480 } = firstImage

  const highlightName = searchResult && searchResult.name ? searchResult.name.value : undefined
  const displayName = React.useMemo(() => {
    if (highlightName === undefined) return name

    /** @type {React.ReactNode[]} */
    let displayName = [highlightName]
    const matches = getMatchesFromString(highlightName, /<em>([^<]+)<\/em>/g)

    if (matches.length > 0) {
      matches.forEach((match, i) => {
        const replacement = (
          <Container key={`${match}${i}`} as="span" bg="lime">
            {match}
          </Container>
        )

        displayName = getArrayNodesReplaced(displayName, `<em>${match}</em>`, replacement)
      })
    }

    return displayName
  }, [name, highlightName])

  const data = {
    imageUrl: '',
    name: productList.name,
    products: productList.products,
  }
  // console.log(data);
  const onSelection = () => {
    setSelectedProduct(data)
    setProductModalOpen(true)
  }

  return (
    <>
      <li>
        <a onClick={onSelection}>
          <div className="image-bg">
            <Image
              src={updateImage?.length ? updateImage : src}
              alt=""
              htmlWidth={width.toString()}
              htmlHeight={height.toString()}
              sizes={`(min-width: ${theme.breakpoints.sm}) 450px, 360px`}
              loading={imageLoading}
              mb="3"
            />
          </div>
          <div>
            <h6>{productList?.name}</h6>
            <p>{updateDisplayName.length ? updateDisplayName : displayName}</p>
          </div>
        </a>
      </li>
    </>
  )
}

export default CustomizerProductGridItem
