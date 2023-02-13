import * as React from 'react'
import { useRouter } from 'frontend-router'
import { useGoogleTagManagerActions } from '@frontend-sdk/google-tag-manager'
import Container from 'Components/Container'
import Flex from 'Components/Flex'
import Grid from 'Components/Grid'
import Heading from 'Components/Heading'
import List from 'Components/List'
import Pagination from 'Components/Pagination'
import ProductGridItem from 'Components/ProductGridItem'
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
const ProductGrid = ({ collection, productsPerPage, onModalClose, showTitle }) => {
  const router = useRouter()
  const {
    push,
    pathname,
    query: { page: urlCurrentPage },
  } = router
  const { trackProductListImpressionsEvent } = useGoogleTagManagerActions()
  const { products: apiProducts, name } = collection || {}
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
  if (products[0]?.customFields?.length)
    products.sort((a, b) => {
      return a?.customFields[0]?.value - b?.customFields[0]?.value
    })

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
        {products.map((product, index) => (
          <ProductGridItem
            key={index}
            product={product}
            onModalClose={onModalClose}
            imageLoading={index < 4 ? 'eager' : 'lazy'}
          />
        ))}
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

export default ProductGrid
