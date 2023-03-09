import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import useStore from 'frontend-store'
import Flex from 'Components/Flex'
import Container from 'Components/Container'
import Heading from 'Components/Heading'
import HStack from 'Components/HStack'
import Text from 'Components/Text'
import IconButton from 'Components/IconButton'
import Icon from 'Components/Icon'
import Button from 'Components/Button'
import CustomizerProductGrid from 'Components/CustomizerProductGrid'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
} from '@chakra-ui/react'
import './styles.module.css'

const Customizer = ({ aesthetics, components, services, peripherals, productSeries }) => {
  const MoonIcon = <Icon icon="MoonIcon" />
  const SunIcon = <Icon icon="SunIcon" />
  const DragHandleIcon = <Icon icon="DragHandleIcon" />
  const HamburgerIcon = <Icon icon="HamburgerIcon" />
  const [themeIcon, setThemeIcon] = useState(true)
  const [view, setView] = useState('grid')
  const [build, setBuild] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [{ caseImage, productData, category }] = useStore()

  useEffect(() => {
    const found = build.find(el => el.productId === productData?.id)
    if (!found && productData?.id !== undefined) {
      const buildData = {
        productId: productData?.id,
        selectedCategory: category,
        product: productData?.name,
        price: productData?.variants[0]?.price,
      }
      build.forEach(({ selectedCategory }, index) => {
        if (selectedCategory === category) {
          build[index] = buildData
        }
      })
      const finalData = [...build, buildData]
      const unique = [...new Map(finalData.map(item => [item['productId'], item])).values()]
      const price = unique.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0,
      )
      setBuild(unique)
      setTotalPrice(price)
    }
  }, [productData, category])

  const onModalClose = () => {
    setIsModalOpen(false)
  }
  const onSelection = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="customizer" style={{ paddingTop: '200px' }}>
        <Flex
          className="customizer-row"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ md: 'flex-start' }}
          justifyContent="space-between"
          mb={5}
        >
          <Container className="product-image" margin={3}>
            <img
              src={
                caseImage
                  ? caseImage
                  : 'https://i.gadgets360cdn.com/large/mvp_pc_build_1604313319165.jpg'
              }
              alt="customImage"
            />
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
                    <Button onClick={onSelection}>Save my build</Button>
                  </Container>
                </HStack>
                <Container>
                  <ul>
                    <li id="aesthetics">
                      <HStack>
                        <Heading as="h6" size="sm">
                          Aesthetics
                          <IconButton
                            aria-label="Grid View"
                            variant="icon"
                            icon={DragHandleIcon}
                            onClick={() => setView('grid')}
                          />
                          <IconButton
                            aria-label="List View"
                            variant="icon"
                            icon={HamburgerIcon}
                            onClick={() => setView('list')}
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

                      <CustomizerProductGrid collection={services} />
                    </li>
                    <li id="peripherals">
                      <Heading as="h6" size="sm">
                        Peripherals
                      </Heading>

                      <CustomizerProductGrid collection={peripherals} />
                    </li>
                  </ul>
                </Container>
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

            <Container>
              <HStack>
                <Container>
                  <Text  color="white" fontSize="m">
                    Warranty
                  </Text>
                  <Text fontSize="xl" noOfLines={1}>
                    5-year
                  </Text>
                </Container>
                <Container>
                  <Text  color="white" fontSize="m">
                   Ships by
                  </Text>
                  <Text fontSize="xl" noOfLines={1}>
                    10/23
                  </Text>
                </Container>
                <Container>
                  <Text  color="white" fontSize="m">
                    Total
                  </Text>
                  <Text fontSize="xl" noOfLines={1}>
                    ${totalPrice}
                  </Text>
                </Container>
                <Button>Add to cart</Button>
              </HStack>
            </Container>
          </Container>
        </Flex>
      </div>
      <Modal isOpen={isModalOpen} onClose={onModalClose} style={{ width: '100%' }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading as={'h1'} style={{ color: 'black' }}>
              SAVE MY BUILD
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading as={'h6'} style={{ color: 'grey' }}>
              Custom URL
            </Heading>
            <textarea></textarea>
            <Heading as={'h6'} style={{ color: 'grey' }}>
              Email
            </Heading>
            <textarea></textarea>
            <Heading as={'h6'} style={{ color: 'grey' }}>
              Spec List
            </Heading>
            <hr />
            <div>
              {build.map(ele => {
                return (
                  <p style={{ color: 'black' }}>
                    {ele.selectedCategory}: {ele.product}
                  </p>
                )
              })}
            </div>
          </ModalBody>
          <ModalFooter>
            <HStack style={{ color: 'black' }}>
              <Heading as={'h6'} style={{ color: 'black', margin: '30px' }}>
                Total: ${totalPrice}
              </Heading>
              <Button onClick={onModalClose} style={{ marginRight: '50px' }}>
                Copy
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Customizer
