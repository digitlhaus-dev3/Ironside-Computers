import React, { useState } from 'react'
import useStore from 'frontend-store'
import Flex from 'Components/Flex'
import Container from 'Components/Container'
import Heading from 'Components/Heading'
import HStack from 'Components/HStack'
import IconButton from 'Components/IconButton'
import Icon from 'Components/Icon'
import Button from 'Components/Button'
import CustomizerProductGrid from 'Components/CustomizerProductGrid'
import './styles.module.css'

const Customizer = ({ aesthetics, components }) => {
  const MoonIcon = <Icon icon="MoonIcon" />
  const SunIcon = <Icon icon="SunIcon" />
  const DragHandleIcon = <Icon icon="DragHandleIcon" />
  const HamburgerIcon = <Icon icon="HamburgerIcon" />
  const [themeIcon, setThemeIcon] = useState(true)
  const [globalStore] = useStore()
    
  return (
    <div className="customizer" style={{ paddingTop: '200px' }}>
      <Flex
        className="customizer-row"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ md: 'flex-start' }}
        justifyContent="space-between"
        mb={5}
      >
        <Container className="product-image" margin={3}>
          <img src={globalStore?.caseImage?.media[0]?.src ? globalStore?.caseImage?.media[0]?.src : 'https://i.gadgets360cdn.com/large/mvp_pc_build_1604313319165.jpg'} alt="customImage" />
        </Container>
        <Container className="product-desc" margin={3}>
          <Flex>
            <div className="product-description">
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
              {/* <Divider margin={3} /> */}
              <Container>
                <ul>
                  <li id="aesthetics">
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
                        <CustomizerProductGrid collection={aesthetics} />
                      </Heading>
                    </HStack>
                    <Container></Container>
                  </li>
                  <li id="components">
                    <Heading as="h6" size="sm">
                      Components
                    </Heading>

                    <CustomizerProductGrid collection={components} />
                  </li>
                  <li id="services">
                    <Heading as="h6" size="sm">
                      Services
                    </Heading>

                    <CustomizerProductGrid collection={components} />
                  </li>
                  <li id="peripherals">
                    <Heading as="h6" size="sm">
                      Peripherals
                    </Heading>

                    <CustomizerProductGrid collection={components} />
                  </li>
                </ul>
              </Container>
              {/* <Divider margin={3} /> */}
            </div>
            <div className="scrollable-desc">
              <Container margin={3}>
                <ul>
                  <li>
                    <a href="#aesthetics">Aesthetics</a>
                  </li>
                  <li>
                    <a href="#components">Components</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#peripherals">Peripherals</a>
                  </li>
                </ul>
              </Container>
            </div>
          </Flex>
        </Container>
      </Flex>
    </div>
  )
}

export default Customizer
