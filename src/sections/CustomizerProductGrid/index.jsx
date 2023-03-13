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
import { useRouter } from 'frontend-router'
import { useGoogleTagManagerActions } from '@frontend-sdk/google-tag-manager'
// import useStore from 'frontend-store'
import Container from 'Components/Container'
import Flex from 'Components/Flex'
import Grid from 'Components/Grid'
import Heading from 'Components/Heading'
import List from 'Components/List'
import Pagination from 'Components/Pagination'
import CustomizerProductGridItem from 'Components/CustomizerProductGridItem'
import VisuallyHidden from 'Components/VisuallyHidden'

/**
 * @typedef { import("lib/types").Collection } Collection
 * @typedef {{
 *  collection?: Collection
 *  productsPerPage?: number
 *  showTitle?: boolean
 * }} ProductGridProps
 *
 * @param { ProductGridProps } props
 */
const CustomizerProductGrid = ({
  collection,
  productsPerPage,
  showTitle,
  setProductModalOpen,
  updateImage,
  updateDisplayName,
  setSelectedProduct,
}) => {
  // const [store, setStore] = useStore()
  // const [selectedProduct, setSelectedProduct] = React.useState()
  // const [updateImage, setUpdateImage] = React.useState([])
  // const [updateDisplayName, setUpdateDisplayName] = React.useState('')
  const router = useRouter()
  const {
    push,
    pathname,
    query: { page: urlCurrentPage },
  } = router
  const { trackProductListImpressionsEvent } = useGoogleTagManagerActions()
  const { products: apiProducts, name, subcategories } = collection || {}
  const currentPage =
    urlCurrentPage && !Array.isArray(urlCurrentPage) ? parseInt(urlCurrentPage) : 1

  const [products, totalPages] = React.useMemo(() => {
    if (!apiProducts) return []
    if (!productsPerPage) return [apiProducts]
    const currentPaginationStart = (currentPage - 1) * productsPerPage
    const currentPaginationEnd = currentPage * productsPerPage
    const totalPages = Math.ceil(apiProducts.length / productsPerPage)

    return [apiProducts.slice(currentPaginationStart, currentPaginationEnd), totalPages]
  }, [apiProducts, currentPage, productsPerPage])

  React.useEffect(() => {
    if (!products || products.length === 0) return

    trackProductListImpressionsEvent(products)
  }, [products, trackProductListImpressionsEvent])

  if (!products) return null

  const handlePageChange = (/** @type {number} */ page) => {
    push({ pathname, query: { page: page.toString() } }, undefined, { shallow: true })
  }
  const filterArray = subcategories?.map(e => {
    e.products[0] = {
      ...e.products[0],
      category_name: e.name,
    }
    return e.products[0]
  })
  // const onSelectProduct = data => {
  //   if (selectedProduct?.name === 'Case') {
  //     setStore({ caseImage: data?.media[0]?.src })
  //   }
  //   setStore({ productData: data, category: selectedProduct?.name })
  //   const idx = selectedProduct?.products.findIndex(product => product.id === data.id)
  //   const temp = selectedProduct?.products[idx]
  //   selectedProduct.products[idx] = selectedProduct?.products[0]
  //   selectedProduct.products[0] = temp
  //   setUpdateImage(temp?.images[1]?.media?.src)
  //   setUpdateDisplayName(temp?.name)
  // }

  return (
    <Container mx="auto" as="section" variant="section-wrapper" mt={8}>
      {showTitle ? (
        <Heading as="h2" mb="8">
          {name}
        </Heading>
      ) : (
        <VisuallyHidden as="h2">{name}</VisuallyHidden>
      )}
      <Grid
        as={List}
        templateColumns={{
          base: 'repeat(auto-fill, minmax(14rem, 1fr))',
          md: 'repeat(auto-fill, minmax(18rem, 1fr))',
        }}
        columnGap="10"
        rowGap="24"
      >
        {/* {productModalOpen ? (
          <ProductGrid
            collection={selectedProduct}
            // onModalClose={onModalClose}
            onSelectProduct={onSelectProduct}
            productsPerPage={5}
          />
        ) : ( */}
        {filterArray?.map((product, index) => (
          <CustomizerProductGridItem
            productList={subcategories[index]}
            key={index}
            product={product}
            imageLoading={index < 4 ? 'eager' : 'lazy'}
            setProductModalOpen={setProductModalOpen}
            setSelectedProduct={setSelectedProduct}
            updateImage={updateImage}
            updateDisplayName={updateDisplayName}
          />
        ))}
        {/* )} */}
      </Grid>
      <Flex justifyContent="center" mt="20">
        {totalPages && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </Flex>
    </Container>
  )
}

export default CustomizerProductGrid
