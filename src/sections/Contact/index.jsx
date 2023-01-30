import React from 'react'
import Flex from 'Components/Flex'
import Container from 'Components/Container'
import Heading from 'Components/Heading'
import Grid from 'Components/Grid'
import FormLabel from 'Components/FormLabel'
import FormControl from 'Components/FormControl'
import Input from 'Components/Input'
import Button from 'Components/Button'
import Text from 'Components/Text'
import { Textarea } from '@chakra-ui/react'
import { validateContactData } from 'Components/Utils'
import './styles.module.css'

const Contact = () => {
  const initialContactData = {
    firstName: '',
    lastName: '',
    email: '',
    phnNumber: '',
    orderNumber: '',
    issueDetails: '',
  }
  const [contactData, setContactData] = React.useState(initialContactData)
  const [isLoading, setIsLoading] = React.useState(false)

  const fieldsDisabled = isLoading

  const submitDisabled = React.useMemo(
    () => fieldsDisabled || !validateContactData(contactData),
    [contactData, fieldsDisabled],
  )

  /** @type { React.FormEventHandler<HTMLDivElement> } */
  const handleSubmit = event => {
    event.preventDefault()
    setIsLoading(true)
  }

  const onFieldChange = React.useCallback(
    (key, { target: { value } }) =>
      setContactData(prevData => ({
        ...prevData,
        [key]: value,
      })),
    [setContactData],
  )

  return (
    <Flex>
      <Heading as="h2">CONTACT</Heading>
      <Container>
        <Container>
          <Heading as="h6">CUSTOMER SERVICE</Heading>
          <Text fontSize="s" fontWeight="semibold">
            Phone: 1-512-696-1455 <br />
            Phone Hours: Monday - Friday 9 a.m. - 4:30 p.m. CST <br />
            Email: CustomerService@IronsideComputers.com
          </Text>
        </Container>
        <Container>
          <Heading as="h6">TECHNICAL SERVICE</Heading>
          <Text fontSize="s" fontWeight="semibold">
            Phone: 1-512-696-1455 <br />
            Phone Hours: Monday - Friday 9 a.m. - 4:30 p.m. CST <br />
            Email: CustomerService@IronsideComputers.com
          </Text>
        </Container>
        <Container>
          <Heading as="h6">SPONSORSHIP OPPORTUNITIES</Heading>
          <Text fontSize="s" fontWeight="semibold">
            For sponsorship inquiries please fill out out <br />
            Sponsorship Application
          </Text>
        </Container>
        <Container>
          <Heading as="h6">LOCATION</Heading>
          <Text fontSize="s" fontWeight="semibold">
            Ironside Computers <br />
            2713 Meister Place Suite 200 <br />
            Round Rock, TX 78664
          </Text>
        </Container>
      </Container>
      <Container>
        <Grid as="form" w={{ base: 'full', md: 'md' }} onSubmit={handleSubmit} rowGap={5}>
          <Container as={FormControl} id="contact-first-name">
            <FormLabel>First Name</FormLabel>
            <Input
              value={contactData.firstName}
              disabled={fieldsDisabled}
              onChange={e => onFieldChange('firstName', e)}
            />
          </Container>
          <Container as={FormControl} id="contact-last-name">
            <FormLabel>Last Name</FormLabel>
            <Input
              value={contactData.lastName}
              disabled={fieldsDisabled}
              onChange={e => onFieldChange('lastName', e)}
            />
          </Container>
          <Container as={FormControl} id="contact-email">
            <FormLabel>Email Address</FormLabel>
            <Input
              value={contactData.email}
              disabled={fieldsDisabled}
              onChange={e => onFieldChange('email', e)}
            />
          </Container>
          <Container as={FormControl} id="contact-phnNumber">
            <FormLabel>Phone Number</FormLabel>
            <Input
              value={contactData.phnNumber}
              disabled={fieldsDisabled}
              onChange={e => onFieldChange('phnNumber', e)}
            />
          </Container>
          <Container as={FormControl} id="contact-first-orderNumber">
            <FormLabel>Order Number</FormLabel>
            <Input
              value={contactData.orderNumber}
              disabled={fieldsDisabled}
              onChange={e => onFieldChange('orderNumber', e)}
            />
          </Container>
          <Container as={FormControl} id="contact-first-orderNumber">
            <FormLabel>How can we help you?</FormLabel>
            <Textarea
              value={contactData.issueDetails}
              disabled={fieldsDisabled}
              onChange={e => onFieldChange('issueDetails', e)}
            />
          </Container>
          <Container>
            <Button
              disabled={submitDisabled}
              isLoading={isLoading}
              loadingText="Submitting"
              type="submit"
              width={{ base: '100%', md: 48 }}
            >
              Apply
            </Button>
          </Container>
        </Grid>
      </Container>
    </Flex>
  )
}

export default Contact