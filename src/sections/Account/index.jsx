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
import { useCustomerActions, useCustomerState } from 'frontend-customer'
import AuthGuard from 'Components/AuthGuard'
import Container from 'Components/Container'
import Button from 'Components/Button'
import Heading from 'Components/Heading'
import HStack from 'Components/HStack'

import { useNormalizedCustomer } from 'Components/Hooks'
import { ACCOUNT_LOGIN_URL } from 'Components/Data'
import AccountOrders from '../Orders'
import AccountDetails from '../AccountDetails'
import AccountAddress from '../AccountAddress'

const Account = () => {
  const { getAllAddresses,logout } = useCustomerActions()
  const customerState = useCustomerState()
  const customer = useNormalizedCustomer(customerState)
  const [categorySelected, setcategorySelected] = React.useState('accountDetails')

  const { isLoggedIn } = customer

  React.useEffect(() => {
    if (isLoggedIn) getAllAddresses()
  }, [isLoggedIn, getAllAddresses])

  return (
    <Container as="section" variant="section-wrapper">
      <HStack justify="space-between" mb={12}>
        <Heading as="h1">My account</Heading>
        {isLoggedIn && (
          <Button variant="outline" size="sm" onClick={logout}>
            Logout
          </Button>
        )}
      </HStack>

      <AuthGuard allowedAuthStatus="authenticated" redirectUrl={ACCOUNT_LOGIN_URL}>
        <HStack>
          <HStack>
            <h2>Welocme to Ironside Computers</h2>
          </HStack>
          <HStack>
            <div>
              <ul>
                <li id="orderHistory" hidden={categorySelected === 'orderHistory' ? false : true}>
                  <div className="list-heading d-flex align-v-center justify-space-between">
                    <h5>Order History</h5>
                  </div>
                  <div className="customizer-grid">
                    <AccountOrders />
                  </div>
                  <Container></Container>
                </li>
                <li
                  id="accountDetails"
                  hidden={categorySelected === 'accountDetails' ? false : true}
                >
                  <h5>Account Details</h5>

                  <div className="customizer-grid">
                    <AccountDetails />
                  </div>
                </li>
                <li id="Addresses" hidden={categorySelected === 'Addresses' ? false : true}>
                  <h5>Addresses</h5>

                  <div className="customizer-grid"><AccountAddress/></div>
                </li>
                <li
                  id="affiliatePortal"
                  hidden={categorySelected === 'affiliatePortal' ? false : true}
                >
                  <h5>Affiliate Portal</h5>

                  <div className="customizer-grid"></div>
                </li>
              </ul>
              <div className="scrollable-desc">
                <Container margin={3}>
                  <ul>
                    <li>
                      <a onClick={() => setcategorySelected('orderHistory')}>order History</a>
                    </li>
                    <li>
                      <a onClick={() => setcategorySelected('accountDetails')}>Account Details</a>
                    </li>
                    <li>
                      <a onClick={() => setcategorySelected('Addresses')}>Addresses</a>
                    </li>
                    <li>
                      <a onClick={() => setcategorySelected('affiliatePortal')}>Affiliate Portal</a>
                    </li>
                  </ul>
                </Container>
              </div>
            </div>
          </HStack>
        </HStack>
      </AuthGuard>
    </Container>
  )
}

export default Account
