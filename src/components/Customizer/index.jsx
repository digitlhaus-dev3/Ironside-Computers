import React, { useState } from 'react'
import Flex from 'Components/Flex'
import Container from 'Components/Container'
import Heading from 'Components/Heading'
import HStack from 'Components/HStack'
import IconButton from 'Components/IconButton'
import Icon from 'Components/Icon'
import Button from 'Components/Button'
import Divider from 'Components/Divider'
import ListItem from 'Components/ListItem'
import './styles.module.css'

const Customizer = () => {
  const MoonIcon = <Icon icon="MoonIcon" />
  const SunIcon = <Icon icon="SunIcon" />
  const DragHandleIcon = <Icon icon="DragHandleIcon" />
  const HamburgerIcon = <Icon icon="HamburgerIcon" />
  const [themeIcon, setThemeIcon] = useState(true)

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ md: 'center' }}
      justifyContent="space-between"
      mb={5}
      className="mainFlex"
    >
      <Container margin={3}>
        <img
          src="https://i.gadgets360cdn.com/large/mvp_pc_build_1604313319165.jpg"
          alt="customImage"
        />
      </Container>
      <Container margin={3}>
        <HStack>
          <Container>
            <Heading as="h4">TOKYO DREAM</Heading>
            <h5>Level 2</h5>
          </Container>
          <Container>
            <IconButton
              aria-label="Go to the previous image"
              variant="icon"
              icon={themeIcon ? MoonIcon : SunIcon}
              onClick={() => setThemeIcon(!themeIcon)}
            />
            <Button variant="outline" size="md">
              Save my build
            </Button>
          </Container>
        </HStack>
        <Divider margin={3} />
        <Container>
          <ul>
            <li>
              <HStack>
                <Heading as="h6" size="sm">
                  Aesthetics
                  <IconButton
                    aria-label="Go to the previous image"
                    variant="icon"
                    icon={DragHandleIcon}
                  />
                  <IconButton
                    aria-label="Go to the previous image"
                    variant="icon"
                    icon={HamburgerIcon}
                  />
                </Heading>
              </HStack>
              <Container></Container>
            </li>
            <li>
              <Heading as="h6" size="sm">
                Components
              </Heading>
            </li>
            <li>
              <Heading as="h6" size="sm">
                Services
              </Heading>
            </li>
            <li>
              <Heading as="h6" size="sm">
                Peripherals
              </Heading>
            </li>
          </ul>
        </Container>
        <Divider margin={3} />
      </Container>
      <Container margin={3}>
        <ul>
          <li>
            <Heading as="h6" size="sm">
              Aesthetics
            </Heading>
          </li>
          <li>
            <Heading as="h6" size="sm">
              Components
            </Heading>
          </li>
          <li>
            <Heading as="h6" size="sm">
              Services
            </Heading>
          </li>
          <li>
            <Heading as="h6" size="sm">
              Peripherals
            </Heading>
          </li>
        </ul>
      </Container>
    </Flex>
  )
}

export default Customizer
