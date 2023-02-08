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
  useDisclosure,
  Button,
} from '@chakra-ui/react'

import Container from 'Components/Container'
import Image from 'Components/Image'
import Text from 'Components/Text'
import { useNormalizedProduct } from 'Components/Hooks'
import CustomizerProductGrid from '../../sections/CustomizerProductGrid'
import {
  getArrayNodesReplaced,
  getMatchesFromString,
  formatMoney,
  uniqueId,
} from 'Components/Utils'
import { shopifyCollection } from '../../lib/mocks/cmsCollections'

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
const CustomizerProductGridItem = ({ imageLoading, product: cmsProduct }) => {
  const product = useNormalizedProduct(cmsProduct)

  if (!product) throw new Error(`Expected product but got ${product}`)

  const {
    name,
    slug,
    media,
    variants: [firstVariant],
    searchResult,
  } = product

  const theme = useTheme()

  const price = firstVariant.price || product.price
  const firstImage = media.length > 0 ? media[0] : defaultMediaItem
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onSelection = e => {
    console.log('IMAGE ==> ', displayName)
    onOpen()
  }

  return (
    <>
      <a onClick={onSelection}>
        <Image
          src={src}
          alt=""
          htmlWidth={width.toString()}
          htmlHeight={height.toString()}
          sizes={`(min-width: ${theme.breakpoints.sm}) 450px, 360px`}
          loading={imageLoading}
          mb="3"
        />
        <Text fontSize="lg" color="black">
          {displayName}
        </Text>
        {price && (
          <Text color="gray.800" mb="3">
            {formatMoney({ money: price })}
          </Text>
        )}
      </a>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CustomizerProductGrid collection={shopifyCollection} productsPerPage={5} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
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
