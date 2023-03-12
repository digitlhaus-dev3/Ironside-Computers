import * as React from 'react'
import { useCustomerActions, useCustomerState } from 'frontend-customer'
import { FaBoxes } from 'react-icons/fa'
import AuthGuard from 'Components/AuthGuard'
import Button from 'Components/Button'
import Container from 'Components/Container'
import Grid from 'Components/Grid'
import GridItem from 'Components/GridItem'
import Heading from 'Components/Heading'
import HStack from 'Components/HStack'
import Icon from 'Components/Icon'
import Link from 'Components/Link'
import Text from 'Components/Text'
import Input from 'Components/Input'
import { useNormalizedCustomer, usePlatform } from 'Components/Hooks'
import {
  ACCOUNT_ADDRESS_URL,
  ACCOUNT_CHANGE_PASSWORD_URL,
  ACCOUNT_LOGIN_URL,
  ACCOUNT_ORDERS_URL,
} from 'Components/Data'


const AccountDetails = () => {
  const [platform] = usePlatform()
  const [updatedData, setUpdatedData] = React.useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    newPassword: '',
    confirmNewPassword: '',
  })
  const { getAllAddresses, logout } = useCustomerActions()
  const customerState = useCustomerState()
  const customer = useNormalizedCustomer(customerState)
  const { updateCustomer } = useCustomerActions()

  const { addresses, defaultAddress, displayName, email, firstName, isLoggedIn, lastName, phone } =
    customer

  React.useEffect(() => {
    if (isLoggedIn) getAllAddresses()
  }, [isLoggedIn, getAllAddresses])
  const updateFields = async () => {
    await updateCustomer({
      firstName: updatedData.firstName, // optional
      lastName: updatedData.lastName, // optional
      email: updatedData.email, // optional
      phone: updatedData.phone, // optional
      newPassword: updatedData.newPassword, // optional
    })
  }
  const logoutUser = async() => {
    await logout()
  }
  return (
    <Container as="section" variant="section-wrapper">
      <AuthGuard allowedAuthStatus="authenticated" redirectUrl={ACCOUNT_LOGIN_URL}>
        {/* <HStack mb={12}>
          <Link href={ACCOUNT_ORDERS_URL} variant="secondary" minW="auto" size="md">
            <HStack>
              <Icon size="lg" as={FaBoxes} mr={4} />
              <Text as="span">Orders</Text>
            </HStack>
          </Link>
        </HStack> */}

        <Grid gridRowGap={8}>
          <Text>My Info</Text>
          <GridItem>
            <Text as="strong">First Name</Text>
            <Input
              Placeholder={displayName || [firstName].join(' ')}
              onChange={event =>
                setUpdatedData(previousData => ({
                  ...previousData,
                  firstName: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <Text as="strong">Last Name</Text>
            <Input
              Placeholder={displayName || [lastName].join(' ')}
              onChange={event =>
                setUpdatedData(previousData => ({
                  ...previousData,
                  lastName: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <Text as="strong">Phone</Text>
            <Input
              Placeholder={displayName || [phone]}
              onChange={event =>
                setUpdatedData(previousData => ({
                  ...previousData,
                  phone: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <Text as="strong">Email</Text>
            <Input
              type={email}
              Placeholder={email}
              onChange={event =>
                setUpdatedData(previousData => ({
                  ...previousData,
                  email: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <button onClick={updateFields}>Update</button>
          </GridItem>
          {/* <GridItem display={{ md: 'flex' }}>
            <Container flexGrow={1} alignItems="start">
              <Text as="strong">Password:</Text>
              <Text aria-hidden="true">********</Text>
            </Container>

            {platform === 'big_commerce' && (
              <Link
                href={ACCOUNT_CHANGE_PASSWORD_URL}
                color="black"
                mt={{ base: 2, md: 3 }}
                minW="40"
                textDecoration="underline"
              >
                Change password
              </Link>
            )}
          </GridItem> */}

          {/* {addresses && (
            <GridItem display={{ md: 'flex' }}>
              <Container flex={1} mb={{ base: 3, md: 0 }}>
                <Text as="strong">Addresses:</Text>
                {addresses.length > 0
                  ? addresses.map(
                      ({ address1, address2, city, country, id, phone, province, zip }) => (
                        <Container key={id} mt={2} mb={8}>
                          <Container as="address">
                            <Text>{address1}</Text>
                            {address2 && <Text>{address2}</Text>}
                            <Text>
                              {city}, {province}, {zip}
                            </Text>
                            <Text>{country}</Text>
                            {phone && <a href={`tel:${phone}`}>{phone}</a>}
                          </Container>
                          <HStack h={8} justify="space-between" mt={2} maxW="400px">
                            <Link
                              href={`${ACCOUNT_ADDRESS_URL}?id=${id}`}
                              color="black"
                              textDecoration="underline"
                            >
                              Edit address
                            </Link>
                            {defaultAddress && defaultAddress.id === id && (
                              <Text as="strong">Default</Text>
                            )}
                          </HStack>
                        </Container>
                      ),
                    )
                  : ' n/a'}
                <Container mt={8}>
                  <Link href={ACCOUNT_ADDRESS_URL} color="black" textDecoration="underline">
                    <Icon icon="AddIcon" mb={1} mr={1} size="sm" />
                    Add new address
                  </Link>
                </Container>
              </Container>
            </GridItem>
          )} */}
        </Grid>
        <Grid gridRowGap={8}>
          <Text>Password</Text>
          <GridItem>
            <Text as="strong">Current Password</Text>
            <Input value="*********" />
          </GridItem>
          <GridItem>
            <Text as="strong">New Password</Text>
            <Input
              onChange={event =>
                setUpdatedData(previousData => ({
                  ...previousData,
                  newPassword: event.target.value,
                }))
              }
            />
          </GridItem>
          <GridItem>
            <Text as="strong">Confirm New Password</Text>
            <Input
              onChange={event =>
                setUpdatedData(previousData => ({
                  ...previousData,
                  confirmNewPassword: event.target.value,
                }))
              }
            />
          </GridItem>
          <button onClick={updateFields}>Update</button>
        </Grid>
      </AuthGuard>
    </Container>
  )
}

export default AccountDetails
