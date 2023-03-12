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
import React from 'react'
import { useCustomerActions, useCustomerState } from 'frontend-customer'
import { useRouter } from 'frontend-router'
import { useIsMounted, useNormalizedCustomer, usePlatform } from 'Components/Hooks'
import AuthGuard from 'Components/AuthGuard'
import Container from 'Components/Container'
import Grid from 'Components/Grid'
import GridItem from 'Components/GridItem'
import Text from 'Components/Text'
import Input from 'Components/Input'
import { ACCOUNT_LOGIN_URL } from 'Components/Data'

const AccountAddress = () => {
  const { getAllAddresses, logout, updateAddress } = useCustomerActions()
  const customerState = useCustomerState()
  const customer = useNormalizedCustomer(customerState)
  const isMounted = useIsMounted()
  const router = useRouter()
  const [platform] = usePlatform()
  const { id, isLoggedIn } = customer

  React.useEffect(() => {
    if (isLoggedIn) getAllAddresses()
  }, [isLoggedIn, getAllAddresses])

  console.log('customer', customer)

  const ShippingAddress = customer?.addresses?.map(address => {
    return {
      address1: address.address1,
      address2: address.address2,
      city: address.city,
      province: address.province,
      country: address.country,
    }
  })

  const BillingAddress = {
    address1: customer?.defaultAddress?.address1,
    address2: customer?.defaultAddress?.address2,
    city: customer?.defaultAddress?.city,
    province: customer?.defaultAddress?.province,
    country: customer?.defaultAddress?.country,
  }

  const [addressData, setAddressData] = React.useState()
  const updateShippingAddress = async () => {
    await updateAddress({
      id: id,
      address: {
        address1: ShippingAddress[0].address1, // optional
        city: ShippingAddress[0].city, // optional
        state: ShippingAddress[0].province, // optional
        address2: ShippingAddress[0].address2, // optional
        country: ShippingAddress[0].country, // optional
      },
    })
  }

  const updateBillingAddress = async () => {
    console.log('success')
  }

  return (
    <Container as="section" variant="section-wrapper">
      <AuthGuard allowedAuthStatus="authenticated" redirectUrl={ACCOUNT_LOGIN_URL}>
        <Grid gridRowGap={8}>
          <Text>Shipping Address</Text>
          <GridItem>
            <Text as="strong">Address</Text>
            <Input
              Placeholder={ ShippingAddress ? ShippingAddress[0].address1 : 'Please Enter the Shipping Address'}
              onChange={event =>
                setAddressData(previousData => ({
                  ...previousData,
                  firstName: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <Text as="strong">Address line 2</Text>
            <Input
              Placeholder={ ShippingAddress ? ShippingAddress[0].address2 : 'Please Enter the Shipping Address'}
              onChange={event =>
                setAddressData(previousData => ({
                  ...previousData,
                  lastName: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <Text as="strong">City</Text>
            <Input
              Placeholder={ShippingAddress ? ShippingAddress[0].city : 'Please Enter the Shipping Address'}
              onChange={event =>
                setAddressData(previousData => ({
                  ...previousData,
                  phone: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <Text as="strong">State/Province</Text>
            <Input
              Placeholder={ShippingAddress ? ShippingAddress[0].province:'Please Enter the Shipping Address'}
              onChange={event =>
                setAddressData(previousData => ({
                  ...previousData,
                  email: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <Text as="strong">Country</Text>
            <Input
              Placeholder={ShippingAddress ? ShippingAddress[0].country : 'Please Enter the Shipping Address'}
              onChange={event =>
                setAddressData(previousData => ({
                  ...previousData,
                  email: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <button onClick={updateShippingAddress}>Update</button>
          </GridItem>
        </Grid>
        <Grid gridRowGap={8}>
          <Text>Billing Address</Text>
          <GridItem>
            <Text as="strong">Address</Text>
            <Input
              Placeholder={BillingAddress.address1}
              onChange={event =>
                setAddressData(previousData => ({
                  ...previousData,
                  firstName: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <Text as="strong">Address line 2</Text>
            <Input
              Placeholder={BillingAddress.address2}
              onChange={event =>
                setAddressData(previousData => ({
                  ...previousData,
                  lastName: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <Text as="strong">City</Text>
            <Input
              Placeholder={BillingAddress.city}
              onChange={event =>
                setAddressData(previousData => ({
                  ...previousData,
                  phone: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <Text as="strong">State/Province</Text>
            <Input
              Placeholder={BillingAddress.province}
              onChange={event =>
                setAddressData(previousData => ({
                  ...previousData,
                  email: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <Text as="strong">Country</Text>
            <Input
              Placeholder={BillingAddress.country}
              onChange={event =>
                setAddressData(previousData => ({
                  ...previousData,
                  email: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <button onClick={updateBillingAddress}>Update</button>
          </GridItem>
        </Grid>
      </AuthGuard>
    </Container>
  )
}

export default AccountAddress
