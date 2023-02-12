import React from 'react'
import Container from "../Container";
import FormControl from "../FormControl";
import Input from "../Input";
import Flex from "../Flex";
import Button from "../Button";

const MyInfo = () => {
  return (
      <div>
        <Container as="form" w={{ base: 'full', md: 'md' }}>
          <Container display="block" mb={5} as={FormControl} id="login-email">
            <Input
                placeholder="First Name"
                type="text"
                value="John"
                isRequired
            />
          </Container>

          <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              alignItems={{ md: 'center' }}
              justifyContent="space-between"
              mb={5}
          >
            <Button
                className='btn'
                loadingText="Submitting"
                type="submit"
                width={{ base: '100%', md: 48 }}
                maxWidth="100%"
                mb={{ base: 5, md: 0 }}
                mr="5"
            >
              Udate
            </Button>
          </Flex>
        </Container>

      </div>
  )
}

export default MyInfo
