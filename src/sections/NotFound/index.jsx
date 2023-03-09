import React from 'react'
import Container from 'Components/Container'
import Flex from 'Components/Flex'
import Button from 'Components/Button'
import Text from 'Components/Text'

const NotFound = () => {
  const reboot = () => {
    console.log('NAvigated to home page')
  }
  return (
    <div className="box-form absolute-heading">
      <h1 className="account-heading">404</h1>
      <div className="bg-box">
        <div className="bg-box-head">
          <div className="flex dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Container w={{ base: 'full', md: 'md' }}>
          <Container display="block" mb={5}>
            <Text>Seems the page you’re looking for isn’t here. (&gt;_&lt;)</Text>
          </Container>

          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ md: 'center' }}
            justifyContent="space-between"
            mb={5}
          >
            <Button
              className="btn"
              loadingText="Submitting"
              type="submit"
              width={{ base: '100%', md: 48 }}
              maxWidth="100%"
              mb={{ base: 5, md: 0 }}
              mr="5"
            >
              Reboot
            </Button>
          </Flex>
        </Container>
      </div>
    </div>
  )
}

export default NotFound
