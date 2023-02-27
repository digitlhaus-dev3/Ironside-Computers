import React from 'react'
import Flex from 'Components/Flex'
import Grid from 'Components/Grid'
import FormLabel from 'Components/FormLabel'
import FormControl from 'Components/FormControl'
import Input from 'Components/Input'
import Button from 'Components/Button'
import { Textarea } from '@chakra-ui/react'
import { validateContactData } from 'Components/Utils'

const ContactPage = () => {
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
  const [value, setValue] = React.useState()
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
  let handleInputChange = e => {
    const inputValue = e.target.value
    setValue(inputValue)
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
    <div className='contact-us flex absolute-heading'>
      <div className="absolute-heading">
        <h1 className="account-heading">CONTACT</h1>
      </div>
      <div>
        <div>
          <h3>CUSTOMER SERVICE</h3>
          <p fontSize="s" fontWeight="semibold">
            Phone: 1-512-696-1455 <br />
            Phone Hours: Monday - Friday 9 a.m. - 4:30 p.m. CST <br />
            Email: CustomerService@IronsideComputers.com
          </p>
        </div>
        <div>
          <h3>TECHNICAL SERVICE</h3>
          <p fontSize="s" fontWeight="semibold">
            Phone: 1-512-696-1455 <br />
            Phone Hours: Monday - Friday 9 a.m. - 4:30 p.m. CST <br />
            Email: CustomerService@IronsideComputers.com
          </p>
        </div>
        <div>
          <h3>SPONSORSHIP OPPORTUNITIES</h3>
          <p fontSize="s" fontWeight="semibold">
            For sponsorship inquiries please fill out out <br />
            Sponsorship Application
          </p>
        </div>
        <div>
          <h3 as="h6">LOCATION</h3>
          <p fontSize="s" fontWeight="semibold">
            Ironside Computers <br />
            2713 Meister Place Suite 200 <br />
            Round Rock, TX 78664
          </p>
        </div>
      </div>
      <div className="box-form absolute-heading account-page">
        <div className="bg-box">
          <div className="bg-box-head">
            <div className="flex dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <Grid as="form" w={{ base: 'full', md: 'md' }} onSubmit={handleSubmit} rowGap={5}>
            <div as={FormControl} id="contact-first-name">
              <Input
                placeholder="First Name"
                value={contactData.firstName}
                disabled={fieldsDisabled}
                onChange={e => onFieldChange('firstName', e)}
              />
            </div>
            <div as={FormControl} id="contact-last-name">
              <Input
                placeholder="Last Name"
                value={contactData.lastName}
                disabled={fieldsDisabled}
                onChange={e => onFieldChange('lastName', e)}
              />
            </div>
            <div as={FormControl} id="contact-email">
              <Input
                placeholder="Email Address"
                value={contactData.email}
                disabled={fieldsDisabled}
                onChange={e => onFieldChange('email', e)}
              />
            </div>
            <div as={FormControl} id="contact-phnNumber">
              <Input
                placeholder="Phone Number"
                value={contactData.phnNumber}
                disabled={fieldsDisabled}
                onChange={e => onFieldChange('phnNumber', e)}
              />
            </div>
            <div as={FormControl} id="contact-first-orderNumber">
              <Input
                placeholder="Order Number"
                value={contactData.orderNumber}
                disabled={fieldsDisabled}
                onChange={e => onFieldChange('orderNumber', e)}
              />
            </div>
            <div as={FormControl} id="contact-first-orderNumber">
              <FormLabel>How can we help you?</FormLabel>
              <Textarea value={value} onChange={handleInputChange} size="sm" resize={'none'} />
            </div>
            <div>
              <Button
                className="btn"
                disabled={submitDisabled}
                isLoading={isLoading}
                loadingp="Submitting"
                type="submit"
                width={{ base: '100%', md: 48 }}
              >
                Apply
              </Button>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
