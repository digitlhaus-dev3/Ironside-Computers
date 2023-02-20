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
import {
  useTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import useStore from 'frontend-store'

import Container from 'Components/Container'
import Image from 'Components/Image'
import Text from 'Components/Text'
import { useNormalizedProduct } from 'Components/Hooks'
import ProductGrid from 'Components/ProductGrid'
import {
  getArrayNodesReplaced,
  getMatchesFromString,
  formatMoney,
  uniqueId,
} from 'Components/Utils'

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
const CustomizerProductGridItem = ({ imageLoading, product: cmsProduct, productList }) => {
  const [store, setStore] = useStore()
  const [build, setBuild] = React.useState([])
  const product = useNormalizedProduct(cmsProduct)
  const [updateImage, setUpdateImage] = React.useState([])
  const [updateDisplayName, setUpdateDisplayName] = React.useState('')
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  if (!product) throw new Error(`Expected product but got ${product}`)

  const {
    name,
    media,
    variants: [firstVariant],
    searchResult,
  } = product

  const theme = useTheme()
  const firstImage = media.length > 0 ? media[0] : defaultMediaItem
  const { src, width = 720, height = 480 } = firstImage
  const [price, setUpdatePrice] = React.useState(firstVariant.price || product.price)

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

  const onModalClose = () => {
    setIsModalOpen(false)
  }

  const onSelection = () => {
    setIsModalOpen(true)
  }
  const onSelectProduct = data => {
    if (productList?.name === 'Case') {
      setStore({ caseImage: data?.media[0]?.src })
    }
    setStore({ productData: data, category: productList?.name })
    const idx = productList?.products.findIndex(product => product.id === data.id)
    const temp = productList?.products[idx]
    productList.products[idx] = productList?.products[0]
    productList.products[0] = temp
    setUpdateImage(temp?.images[0]?.media?.src)
    setUpdateDisplayName(temp?.name)
    setUpdatePrice(temp?.variants[0]?.price)
  }
  const data = {
    imageUrl: '',
    name: productList.name,
    products: productList.products,
  }

  return (
    <>
      <a onClick={onSelection}>
        <Image
          src={updateImage.length ? updateImage : src}
          alt=""
          htmlWidth={width.toString()}
          htmlHeight={height.toString()}
          sizes={`(min-width: ${theme.breakpoints.sm}) 450px, 360px`}
          loading={imageLoading}
          mb="3"
        />
        <Text fontSize="lg" color="black">
          {updateDisplayName.length ? updateDisplayName : displayName}
        </Text>
        {price && (
          <Text color="gray.800" mb="3">
            {formatMoney({ money: price })}
          </Text>
        )}
      </a>

      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProductGrid
              collection={data}
              onModalClose={onModalClose}
              onSelectProduct={onSelectProduct}
              productsPerPage={5}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onModalClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CustomizerProductGridItem
