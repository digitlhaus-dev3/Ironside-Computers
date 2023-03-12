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
import { useCustomer } from 'frontend-customer'
import Container from 'Components/Container'
import { useRouter } from 'frontend-router'
import Heading from 'Components/Heading'
import AuthGuard from 'Components/AuthGuard'
import Breadcrumb from 'Components/Breadcrumb'
import AccountOrderDetails from 'Components/AccountOrderDetails'
import AccountOrderHistory from 'Components/AccountOrderHistory'
import { useNormalizedCustomer } from 'Components/Hooks'
import { ACCOUNT_URL, ACCOUNT_LOGIN_URL, ACCOUNT_ORDERS_URL } from 'Components/Data'

/**
 * @typedef { import("frontend-customer/dist/customer-sdk/platforms/shopify/storefront-api/types/api").Order } Order
 * @typedef { import("frontend-customer/dist/customer-sdk/platforms/big_commerce/rest/types/sdk").BigCommerceSdkOrder } BigCommerceSdkOrder
 */

const AccountOrders = () => {
  const router = useRouter()

  /** @type { { "order-id"?: string } } */
  const { 'order-id': orderId } = router.query

  const [customerState, { getAllOrders }] = useCustomer()
  const { isLoggedIn, orders } = useNormalizedCustomer(customerState)
  const [order, setOrderDetaisl] = React.useState({
    id: '',
    processedAt: '',
    products: '',
    totalPrice: '',
    fulfillmentStatus: '',
  })
  let total = 0
  // const order = React.useMemo(
  //   () => (orders && orderId ? orders.find(order => order.id === orderId) : undefined),
  //   [orders, orderId],
  // )

  console.log('ordersordersorders', orders, customerState)

  console.log('orders', order)

  React.useEffect(() => {
    if (isLoggedIn && !orders) {
      getAllOrders()
    }
  }, [isLoggedIn, orders, getAllOrders])
  React.useEffect(() => {
    if (isLoggedIn === true) {
      orders?.map(event => {
        setOrderDetaisl({
          id: event.id,
          processedAt: event.processedAt,
          products: event.products,
          totalPrice: event.totalPrice,
          fulfillmentStatus: event.fulfillmentStatus,
        })
      })
    }
  }, [isLoggedIn,customerState])
  console.log(">>>>>",order.products.length)
  if (isLoggedIn === true && order.products.length > 0) {
    order?.products?.map(event => {
      return (total = total + event.quantity)
    })
  }
  const timestamp = order.processedAt
  const date = new Date(timestamp)
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <Container as="section" variant="section-wrapper">
      <Heading as="h1" mb={16}>
        {order ? 'Order details' : 'Orders'}
      </Heading>

      <AuthGuard allowedAuthStatus="authenticated" redirectUrl={ACCOUNT_LOGIN_URL}>
        {order && (
          <div>
            <div>
              <h3>Order</h3>
              <p>{order.id}</p>
              <h3>Placed</h3>
              <p>{formattedDate}</p>
              <h3>Items</h3>
              <p>{total}</p>
              <h3>Total</h3>
              <p>${order.totalPrice.amount}</p>
              <button>Order Details</button>
            </div>
            <div>
              <h3>Status</h3>
              <p>{order.fulfillmentStatus}</p>
              <p>ETA 6/24/23</p>
              <button>Track</button>
            </div>
          </div>
        )}
        {/* {order ? <AccountOrderDetails order={order} /> : <AccountOrderHistory orders={orders} />} */}
      </AuthGuard>
    </Container>
  )
}

export default AccountOrders
