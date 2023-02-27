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
import { useCustomerActions } from 'frontend-customer'
import { useRouter } from 'frontend-router'
import Button from 'Components/Button'
import Container from 'Components/Container'
import Divider from 'Components/Divider'
import Grid from 'Components/Grid'
import Heading from 'Components/Heading'
import Input from 'Components/Input'
import Link from 'Components/Link'
import Text from 'Components/Text'
import AuthGuard from 'Components/AuthGuard'
import { useIsMounted } from 'Components/Hooks'
import {
  denormalizeRegisterData,
  normalizeRegisterResult,
  validateRegisterData,
} from 'Components/Utils'
import { ACCOUNT_URL, ACCOUNT_LOGIN_URL } from 'Components/Data'
import FormLabel from 'Components/FormLabel'
import FormControl from 'Components/FormControl'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

/**
 * @typedef { import('lib/types').RegisterDataKey }  RegisterDataKey
 */

const RegisterForm = () => {
  const { register } = useCustomerActions()
  const router = useRouter()
  const isMounted = useIsMounted()

  const [isLoading, setIsLoading] = React.useState(false)

  /** @type { Error[] } */
  const initialRegisterErrors = []
  const [registerErrors, setRegisterErrors] = React.useState(initialRegisterErrors)

  /** @type { import("lib/types").RegisterData }  */
  const initialRegisterData = {
    email: '',
    password: '',
    // confirmPassword: '',
    firstName: '',
    lastName: '',
    countryCode: '',
    province: '',
    city: '',
    zip: '',
    address1: '',
    address2: '',
    // company: '',
  }
  const [registerData, setRegisterData] = React.useState(initialRegisterData)

  const fieldsDisabled = isLoading

  const submitDisabled = React.useMemo(
    () => fieldsDisabled || !validateRegisterData('big_commerce', registerData),
    [registerData, fieldsDisabled],
  )

  const onFieldChange = React.useCallback(
    /** @type {{(key: RegisterDataKey, event: {target: { value: string }}): void }} */
    (key, { target: { value } }) =>
      setRegisterData(prevData => ({
        ...prevData,
        [key]: value,
      })),
    [setRegisterData],
  )

  /** @type { React.FormEventHandler<HTMLDivElement> } */
  const handleSubmit = async event => {
    event.preventDefault()

    setIsLoading(true)
    setRegisterErrors([])

    /** @type { Error[] | undefined } */
    let newRegisterErrors

    try {
      const platformRegisterData = denormalizeRegisterData('big_commerce', registerData)
      const result = await register(platformRegisterData)
      const { errors } = normalizeRegisterResult(result)

      newRegisterErrors = errors
    } catch (/** @type { any } */ error) {
      newRegisterErrors = [error]
    } finally {
      if (!isMounted.current) return

      setIsLoading(false)

      if (!newRegisterErrors || newRegisterErrors.length === 0) {
        router.push(ACCOUNT_LOGIN_URL)
      } else {
        setRegisterErrors(newRegisterErrors)
      }
    }
  }

  return (
    <div className="box-form absolute-heading">
      <h1 className="account-heading">Sign Up</h1>
      <div className="bg-box">
        <div className="bg-box-head">
          <div className="flex dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Container as="section">
          <AuthGuard allowedAuthStatus="unauthenticated" redirectUrl={ACCOUNT_URL}>
            <Grid as="form" w={{ base: 'full', md: 'md' }} onSubmit={handleSubmit} rowGap={5}>
              <Container as={FormControl} id="register-email">
                {/* <FormLabel>Email</FormLabel> */}
                <Input
                  placeholder="Email"
                  type="email"
                  disabled={fieldsDisabled}
                  value={registerData.email}
                  onChange={e => onFieldChange('email', e)}
                  isInvalid={registerErrors.length > 0}
                  isRequired
                />
              </Container>
              <Container as={FormControl} id="register-password">
                {/* <FormLabel>Password</FormLabel> */}
                <Input
                  placeholder="Password"
                  type="password"
                  disabled={fieldsDisabled}
                  value={registerData.password}
                  onChange={e => onFieldChange('password', e)}
                  isInvalid={registerErrors.length > 0}
                  isRequired
                />
              </Container>
              {/* <Container as={FormControl} id="register-confirmPassword">
              <FormLabel>Confirm Password</FormLabel>
              <Input
                placeholder="Enter your password"
                type="password"
                disabled={fieldsDisabled}
                value={registerData.confirmPassword}
                onChange={e => onFieldChange('confirmPassword', e)}
                isInvalid={registerErrors.length > 0}
                isRequired
              />
            </Container> */}
              <Container as={FormControl} id="register-first-name">
                {/* <FormLabel>First name </FormLabel> */}
                <Input
                  placeholder="First name"
                  value={registerData.firstName}
                  disabled={fieldsDisabled}
                  onChange={e => onFieldChange('firstName', e)}
                />
              </Container>

              <Container as={FormControl} id="register-last-name">
                {/* <FormLabel>Last name </FormLabel> */}
                <Input
                  placeholder="Last name"
                  value={registerData.lastName}
                  disabled={fieldsDisabled}
                  onChange={e => onFieldChange('lastName', e)}
                />
              </Container>

              <Container as={FormControl} id="register-address1">
                <Input
                  placeholder="Address 1"
                  value={registerData.address1}
                  disabled={fieldsDisabled}
                  onChange={e => onFieldChange('address1', e)}
                />
              </Container>
              <Container as={FormControl} id="register-address2">
                <Input
                  placeholder="Address 2"
                  value={registerData.address2}
                  disabled={fieldsDisabled}
                  onChange={e => onFieldChange('address2', e)}
                />
              </Container>
              <Container as={FormControl} id="register-city">
                <Input
                  placeholder="City"
                  value={registerData.city}
                  disabled={fieldsDisabled}
                  onChange={e => onFieldChange('city', e)}
                />
              </Container>
              <Container as={FormControl} id="register-countryCode">
                <Input
                  placeholder="Country Code"
                  value={registerData.countryCode}
                  disabled={fieldsDisabled}
                  onChange={e => onFieldChange('countryCode', e)}
                />
              </Container>
              <Container as={FormControl} id="register-state">
                <Input
                  placeholder="State"
                  value={registerData.province}
                  disabled={fieldsDisabled}
                  onChange={e => onFieldChange('province', e)}
                />
              </Container>
              <Container as={FormControl} id="register-postalCode">
                <Input
                  placeholder="Postal Code"
                  value={registerData.zip}
                  disabled={fieldsDisabled}
                  onChange={e => onFieldChange('zip', e)}
                />
              </Container>

              <Container>
                <Button
                  className="btn"
                  disabled={submitDisabled}
                  isLoading={isLoading}
                  loadingText="Submitting"
                  type="submit"
                  width={{ base: '100%', md: 48 }}
                >
                  Next
                </Button>
              </Container>

              {registerErrors.length > 0 && (
                <Container>
                  {registerErrors.map(({ message }, index) => (
                    <Text key={`error-message-${index}`} color="red.600">
                      {message}
                    </Text>
                  ))}
                </Container>
              )}
              {/* <Divider /> */}
            </Grid>
          </AuthGuard>
        </Container>
      </div>
      <Container display="block" id="register-password">
        <Text className="acc-or-signup">
          Have an account?{' '}
          <Link href={ACCOUNT_LOGIN_URL} color="white" ml="2" textDecoration="underline">
            Login
          </Link>
        </Text>
      </Container>
    </div>
  )
}

export default RegisterForm
