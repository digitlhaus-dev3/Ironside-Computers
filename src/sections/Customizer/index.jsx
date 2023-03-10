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
  const [categorySelected, setcategorySelected] = useState('all')
  const [view, setView] = useState('grid')
  const [active, setActive] = useState('active')
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
  const themeChange = () => {
    var element = document.getElementById('frontend-root')
    element.classList.toggle("WhiteTheme");
    console.log(element)
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
                  : 'https://i.ibb.co/bWfjWq9/Y2-KHero-Images-Glacier-Blue-Large-1.png'
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
                  <Flex>
                    <button className="change-theme"
                    onClick={themeChange}></button>
                    {/* <IconButton
                      aria-label="Go to the previous image"
                      variant="icon"
                      icon={themeIcon ? MoonIcon : SunIcon}
                      onClick={() => setThemeIcon(!themeIcon)}
                    /> */}
                    <Button onClick={onSelection} className="btn save-build">
                      Save my build
                    </Button>
                  </Flex>
                </div>
                <div className="fixed-section">
                  <div className="theme-btn">
                    <div className={view}>
                      <button
                        aria-label="Grid View"
                        className="grid-btn"
                        onClick={() => setView('grid')}
                      ></button>
                      <button
                        aria-label="List View"
                        className="list-btn"
                        onClick={() => setView('list')}
                      ></button>
                    </div>
                  </div>
                  <ul className={view}>
                    <li
                      id="aesthetics"
                      hidden={
                        categorySelected === 'aesthetics' || categorySelected === 'all'
                          ? false
                          : true
                      }
                    >
                      <div className="list-heading d-flex align-v-center justify-space-between">
                        <h5>Aesthetics</h5>
                      </div>
                      <div className="customizer-grid">
                        <CustomizerProductGrid collection={aesthetics} />
                      </div>
                      <Container></Container>
                    </li>
                    <li
                      id="components"
                      hidden={
                        categorySelected === 'components' || categorySelected === 'all'
                          ? false
                          : true
                      }
                    >
                      <h5>Components</h5>

                      <div className="customizer-grid">
                        <CustomizerProductGrid collection={components} />
                      </div>
                    </li>
                    <li
                      id="services"
                      hidden={
                        categorySelected === 'services' || categorySelected === 'all' ? false : true
                      }
                    >
                      <h5>Services</h5>

                      <div className="customizer-grid">
                        <CustomizerProductGrid collection={services} />
                      </div>
                    </li>
                    <li
                      id="peripherals"
                      hidden={
                        categorySelected === 'peripherals' || categorySelected === 'all'
                          ? false
                          : true
                      }
                    >
                      <h5>Peripherals</h5>

                      <div className="customizer-grid">
                        <CustomizerProductGrid collection={peripherals} />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="customizer-footer d-flex align-v-center justify-space-between">
                  <Container>
                    <p>Warranty</p>
                    <p>
                      <b>5-year</b>
                    </p>
                  </Container>
                  <Container>
                    <p>Ships by</p>
                    <p>
                      <b>10/23</b>
                    </p>
                  </Container>
                  <Container>
                    <p>Total</p>
                    <p noOfLines={1}>
                      <b>${totalPrice}</b>
                    </p>
                  </Container>
                  <Button className="btn">Add to cart</Button>
                </div>
              </div>
              <div className="scrollable-desc">
                <Container margin={3}>
                  <ul>
                    <li>
                      <a
                        className={
                          categorySelected === 'aesthetics'
                            ? 'active'
                            : 'un-active'
                        }
                        onClick={() => setcategorySelected('aesthetics')}
                      >
                        Aesthetics
                      </a>
                    </li>
                    <li>
                      <a
                        className={
                          categorySelected === 'components'
                            ? 'active'
                            : 'un-active'
                        }
                        onClick={() => setcategorySelected('components')}
                      >
                        Components
                      </a>
                    </li>
                    <li>
                      <a 
                        className={
                          categorySelected === 'services'
                            ? 'active'
                            : 'un-active'
                        }
                        onClick={() => setcategorySelected('services')}>Services</a>
                    </li>
                    <li>
                      <a 
                        className={
                          categorySelected === 'peripherals'
                            ? 'active'
                            : 'un-active'
                        }
                        onClick={() => setcategorySelected('peripherals')}>Peripherals</a>
                    </li>
                    <li className='all'>
                      <a 
                        className={
                          categorySelected === 'all'
                            ? 'active'
                            : 'un-active'
                        }
                        onClick={() => setcategorySelected('all')}>All</a>
                    </li>
                  </ul>
                </Container>
              </div>
            </div>
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
