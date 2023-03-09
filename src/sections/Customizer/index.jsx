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
      <div className="customizer" style={{ paddingTop: '149px' }}>
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
            <div className="prod-desc-scroll flex">
              <div className="product-description">
                <div className="customizer-heading d-flex align-v-center justify-space-between">
                  <Container>
                    <h2>TOKYO DREAM</h2>
                    <p className="m-0">Level 2</p>
                  </Container>
                  <Container>
                    <IconButton
                      aria-label="Go to the previous image"
                      variant="icon"
                      icon={themeIcon ? MoonIcon : SunIcon}
                      onClick={() => setThemeIcon(!themeIcon)}
                    />
                    <Button onClick={onSelection} className="btn save-build">
                      Save my build
                    </Button>
                  </Container>
                </div>
                <div className="fixed-section">
                  <ul className={view}>
                    <li id="aesthetics">
                      <div className="list-heading d-flex align-v-center justify-space-between">
                        <h5>Aesthetics</h5>
                        <HStack>
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
                        </HStack>
                      </div>
                      <div className="customizer-grid">
                        <CustomizerProductGrid collection={aesthetics} />
                      </div>
                      <Container></Container>
                    </li>
                    <li id="components">
                      <h5>Components</h5>

                      <div className="customizer-grid">
                        <CustomizerProductGrid collection={components} />
                      </div>
                    </li>
                    <li id="services">
                      <h5>Services</h5>

                      <div className="customizer-grid">
                        <CustomizerProductGrid collection={services} />
                      </div>
                    </li>
                    <li id="peripherals">
                      <h5>Peripherals</h5>

                      <div className="customizer-grid">
                        <CustomizerProductGrid collection={peripherals} />
                      </div>
                    </li>
                  </ul>
                </div>
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
            </div>

            <Container>
              <HStack>
                <Container>
                  <Text color="white" fontSize="m">
                    Warranty
                  </Text>
                  <Text fontSize="xl" noOfLines={1}>
                    5-year
                  </Text>
                </Container>
                <Container>
                  <Text color="white" fontSize="m">
                    Ships by
                  </Text>
                  <Text fontSize="xl" noOfLines={1}>
                    10/23
                  </Text>
                </Container>
                <Container>
                  <Text color="white" fontSize="m">
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
