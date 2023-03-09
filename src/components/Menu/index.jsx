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
import {
  forwardRef,
  MenuButton,
  MenuItem,
  MenuList,
  MenuProvider,
  omitThemingProps,
  Portal,
  StylesProvider,
  useMenu,
  useMultiStyleConfig,
  useShortcut,
} from '@chakra-ui/react'
import Container from 'Components/Container'
import Flex from 'Components/Flex'
import Icon from 'Components/Icon'
import Link from 'Components/Link'
import Text from 'Components/Text'
import HStack from 'Components/HStack'
import { useIsFirstRender } from 'Components/Hooks'
import AboutSubMenu from 'Components/AboutSubMenu'
import Image from 'Components/Image'
import { useCart } from 'frontend-checkout'

/**
 * @typedef { import("@chakra-ui/react").MenuProps } ChakraMenuProps
 * @typedef { import("lib/types").MenuLinks } MenuLinks
 * @typedef {{
 *  content?: React.ReactChild
 *  links?: MenuLinks[]
 * }} MenuProps
 *
 * @param { MenuProps & Omit<ChakraMenuProps, 'children'> } props
 */
const Mobile = props => {
  const { content, links = [], ...chakraMenuProps } = props
  const styles = useMultiStyleConfig('Menu', chakraMenuProps)

  /** @type { [ number | undefined, React.Dispatch<React.SetStateAction<number | undefined>> ] } */
  const [expandedIndex, setExpandedIndex] = React.useState()

  const context = useMenu({
    autoSelect: false,
    ...omitThemingProps(chakraMenuProps),
  })

  const { setFocusedIndex, onClose, isOpen } = context

  const menuListKeyDownCaptureHandler = React.useCallback(
    /** @type {React.KeyboardEventHandler<HTMLDivElement>} */
    event => {
      const { key } = event

      if (key === 'Tab') {
        event.stopPropagation()
        onClose()
      }
    },
    [onClose],
  )
  const [{ items = [] }, { showCart }] = useCart()
  const itemsQuantity = items.reduce((acc, currentItem) => acc + currentItem.quantity, 0)

  const cartIconAriaLabel = !!itemsQuantity ? `Cart with ${itemsQuantity} items.` : 'Cart is empty.'

  React.useEffect(() => {
    if (expandedIndex === undefined) return

    setFocusedIndex(expandedIndex + 1)
  }, [setFocusedIndex, expandedIndex])
  return (
    <Flex display={{ md: 'none' }} align="center">
      <MenuProvider value={context}>
        <StylesProvider value={styles}>
          <MenuButton
            className="mobile-menu-btn"
            verticalAlign="middle"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon icon="HamburgerIcon" boxSize="6" />
          </MenuButton>

          <Portal>
            <div className="mobile-menu">
              <MenuList
                display={{ md: 'none' }}
                onKeyDownCapture={menuListKeyDownCaptureHandler}
                zIndex="dropdown"
              >
                <div className="mobile-top">
                  <Link onClick={showCart} aria-label={cartIconAriaLabel} className="cart"></Link>
                  <Link
                    // href={isLoggedIn ? ACCOUNT_URL : ACCOUNT_LOGIN_URL}
                    title="Navigate to account"
                    aria-label="Navigate to my account"
                    className="account"
                  ></Link>
                  <MenuButton
                    className="mobile-menu-btn"
                    verticalAlign="middle"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                  >
                    <Icon icon="HamburgerIcon" boxSize="6" />
                  </MenuButton>
                </div>
                {content && <Container sx={styles.contentItem}>{content}</Container>}

                {links.map(({ label, slug, subMenuLinks, backgroundImage }, index) => {
                  if (!subMenuLinks) {
                    return (
                      <MenuItem key={label} as={Link} href={slug} className="nav-links-btn">
                        {label}
                      </MenuItem>
                    )
                  }

                  const isExpanded = index === expandedIndex
                  return (
                    <React.Fragment key={label}>
                      <MenuItem
                        sx={styles.parentItem}
                        onClickCapture={event => {
                          event.stopPropagation()
                          setExpandedIndex(prev => (prev === index ? undefined : index))
                        }}
                        className="nav-links-btn"
                      >
                        <Image className="mobile-img" src={backgroundImage?.src} />
                        <Text>{label}</Text>
                        <Icon
                          icon={isExpanded ? 'ChevronDownIcon' : 'ChevronRightIcon'}
                          boxSize="6"
                        />
                      </MenuItem>

                      {isExpanded &&
                        subMenuLinks.map(({ label, description, slug }) => {
                          return (
                            <div>
                              <MenuItem
                                key={label}
                                as={Link}
                                href={slug}
                                sx={styles.mobileSubmenuItem}
                              >
                                <h3>{label}</h3>
                                <p>{description}</p>
                              </MenuItem>
                            </div>
                          )
                        })}
                      {isExpanded && label === 'About' && (
                        <div>
                          <MenuItem sx={styles.mobileSubmenuItem}>
                            <AboutSubMenu />
                          </MenuItem>
                        </div>
                      )}
                    </React.Fragment>
                  )
                })}
                <div>
                  <MenuItem sx={styles.mobileSubmenuItem}>
                    <div className="about-us-bottom">
                      <HStack>
                        <span className="contact-icon"></span>
                        <p>
                          <strong>1 (512) 696–1455</strong>
                          help@ironsidecomputers.com <br />Mon – Fri  9am to 4:30pm CST
                        </p>
                      </HStack>
                    </div>
                  </MenuItem>
                </div>
              </MenuList>
            </div>
          </Portal>
        </StylesProvider>
      </MenuProvider>
    </Flex>
  )
}

/**
 * @typedef {{
 *  itemIndex: number
 *  tabIndex: number
 *  shouldOpen: boolean
 *  onSubmenuOpen: (itemIndex: number) => void
 *  onSubmenuClose: (itemIndex: number) => void
 * }} SubMenuProps
 *
 */
const SubMenu = forwardRef(
  (
    /** @type { SubMenuProps & Required<Omit<MenuLinks, 'slug'>> & Omit<ChakraMenuProps, 'children'>} */
    props,
    /** @type { React.ForwardedRef<HTMLButtonElement> } */ ref,
  ) => {
    const {
      label,
      subMenuLinks,
      itemIndex,
      tabIndex,
      shouldOpen,
      onSubmenuOpen,
      onSubmenuClose,
      backgroundImage,
      ...chakraMenuProps
    } = props
    const maxIndex = subMenuLinks.length - 1
    const firstRender = useIsFirstRender()

    const styles = useMultiStyleConfig('Menu', chakraMenuProps)

    const context = useMenu({
      offset: [0, 0],
      autoSelect: false,
      ...omitThemingProps(chakraMenuProps),
    })

    const { openAndFocusFirstItem, setFocusedIndex, onClose, isOpen } = context

    const menuListKeyDownCaptureHandler = React.useCallback(
      /** @type {React.KeyboardEventHandler<HTMLDivElement>} */
      event => {
        const { key } = event

        if (key === 'Tab') {
          event.stopPropagation()
          onClose()
        }
      },
      [onClose],
    )

    const menuListKeyDownHandler = React.useCallback(
      /** @type {React.KeyboardEventHandler<HTMLDivElement>} */
      event => {
        const { key } = event

        switch (key) {
          case 'Home': {
            event.preventDefault()
            setFocusedIndex(0)
            break
          }

          case 'End': {
            event.preventDefault()
            setFocusedIndex(maxIndex)
            break
          }
        }
      },
      [maxIndex, setFocusedIndex],
    )

    React.useEffect(() => {
      if (firstRender.current) {
        return
      }

      if (isOpen) {
        onSubmenuOpen(itemIndex)
      } else {
        onSubmenuClose(itemIndex)
      }
    }, [firstRender, itemIndex, onSubmenuOpen, onSubmenuClose, isOpen])

    React.useEffect(() => {
      if (shouldOpen) {
        openAndFocusFirstItem()
      }
    }, [shouldOpen, openAndFocusFirstItem])

    React.useEffect(() => {
      if (tabIndex < 0) {
        onClose()
      }
    }, [tabIndex, onClose])

    return (
      <MenuProvider key={label} value={context}>
        <StylesProvider value={styles}>
          <MenuButton
            ref={ref}
            tabIndex={tabIndex}
            omMouseClick={openAndFocusFirstItem}
            // onMouseLeave={onClose}
            className="nav-links-btn"
          >
            <Text as="span">{label}</Text>
            <Icon icon="ChevronDownIcon" boxSize="6" />
          </MenuButton>

          {!firstRender.current && (
            <MenuList
              display={{ base: 'none', md: 'block' }}
              omMouseClick={openAndFocusFirstItem}
              // onMouseLeave={onClose}
              onKeyDownCapture={menuListKeyDownCaptureHandler}
              onKeyDown={menuListKeyDownHandler}
              className={backgroundImage?.src ? '' : 'about-us'}
            >
              <div style={{ backgroundImage: `url(${backgroundImage?.src})` }}>
                <div className="menu-description">
                  {backgroundImage?.src ? (
                    subMenuLinks.map(({ slug, label, description, image }) => (
                      <MenuItem key={label} as={Link} href={slug}>
                        <Image src={image.src} alt={image.altText} />
                        <span className="sub-menu-heading">{label}</span>
                        <br></br>
                        <span className="sub-menu-desc">{description}</span>
                      </MenuItem>
                    ))
                  ) : (
                    <AboutSubMenu />
                  )}
                </div>
              </div>
            </MenuList>
          )}
        </StylesProvider>
      </MenuProvider>
    )
  },
)

/**
 * @param { Omit<MenuProps, 'content'> & Omit<ChakraMenuProps, 'children'> } props
 */
const Desktop = props => {
  /** @type {MenuLinks[]} */
  const emptyArr = React.useMemo(() => [], [])
  const { links = emptyArr, ...chakraMenuProps } = props
  const lowercasedLabels = React.useMemo(
    () => links.map(({ label }) => label.toLowerCase()),
    [links],
  )

  const firstRender = useIsFirstRender()

  const styles = useMultiStyleConfig('Menu', chakraMenuProps)

  const [submenusExpanded, setSubmenusExpanded] = React.useState(0)
  const isSubmenusExpanded = submenusExpanded > 0

  const [focusedIndex, setFocusedIndex] = React.useState(0)
  const maxIndex = links.length - 1

  /** @type { Array<React.MutableRefObject<HTMLButtonElement | null>> } */
  const initialRefs = React.useMemo(() => links.map(() => React.createRef()), [links])
  const refs = React.useRef(initialRefs)

  const onCharacterPress = useShortcut({
    preventDefault: event => event.key !== ' ',
  })

  const menuKeyDownHandler = React.useCallback(
    /** @type {React.KeyboardEventHandler<HTMLDivElement>} */
    event => {
      const { key } = event

      const preventDefaultAndStopPropagation = () => {
        event.preventDefault()
        event.stopPropagation()
      }

      const characterHandler = onCharacterPress(character => {
        const characterLowercased = character.toLowerCase()
        const nextIndex = lowercasedLabels.findIndex(label => label.startsWith(characterLowercased))

        if (nextIndex >= 0) {
          setFocusedIndex(nextIndex)
        }
      })

      switch (key) {
        case 'ArrowRight': {
          preventDefaultAndStopPropagation()
          setFocusedIndex(prev => (prev < maxIndex ? prev + 1 : 0))
          break
        }

        case 'ArrowLeft': {
          preventDefaultAndStopPropagation()
          setFocusedIndex(prev => (prev > 0 ? prev - 1 : maxIndex))
          break
        }

        case 'Home': {
          if (!isSubmenusExpanded) {
            preventDefaultAndStopPropagation()
            setFocusedIndex(0)
          }
          break
        }

        case 'End': {
          if (!isSubmenusExpanded) {
            preventDefaultAndStopPropagation()
            setFocusedIndex(maxIndex)
          }
          break
        }

        default: {
          if (!isSubmenusExpanded) {
            characterHandler(event)
          }
        }
      }
    },
    [lowercasedLabels, maxIndex, isSubmenusExpanded, onCharacterPress],
  )

  const subMenuOpenHandler = React.useCallback(
    /** @param { number } index */
    index => {
      setSubmenusExpanded(prev => prev + 1)
      setFocusedIndex(index)
    },
    [],
  )

  const subMenuCloseHandler = React.useCallback(() => {
    setSubmenusExpanded(prev => prev - 1)
  }, [])

  React.useEffect(() => {
    const itemToFocus = refs.current[focusedIndex]

    if (!firstRender.current && itemToFocus && itemToFocus.current) {
      itemToFocus.current.focus()
    }
  }, [firstRender, focusedIndex])

  return (
    <HStack display={{ base: 'none', md: 'block' }} onKeyDown={menuKeyDownHandler}>
      {links.map(({ label, slug, subMenuLinks, description, backgroundImage }, index) => {
        if (subMenuLinks) {
          return (
            <SubMenu
              description={description}
              backgroundImage={backgroundImage}
              key={label}
              ref={refs.current[index]}
              label={label}
              subMenuLinks={subMenuLinks}
              itemIndex={index}
              tabIndex={index === focusedIndex ? 0 : -1}
              shouldOpen={isSubmenusExpanded && index === focusedIndex}
              onSubmenuOpen={subMenuOpenHandler}
              onSubmenuClose={subMenuCloseHandler}
              {...chakraMenuProps}
            />
          )
        }

        return (
          <Link
            key={label}
            ref={refs.current[index]}
            sx={styles.item}
            href={slug}
            tabIndex={index === focusedIndex ? 0 : -1}
            className="nav-links-btn"
          >
            {label}
          </Link>
        )
      })}
    </HStack>
  )
}

/**
 * @param { MenuProps & Omit<ChakraMenuProps, 'children'> } props
 */
const Menu = props => {
  const { content, links, ...chakraMenuProps } = props

  return (
    <React.Fragment>
      <Mobile links={links} {...chakraMenuProps} />
      <Desktop links={links} {...chakraMenuProps} />
    </React.Fragment>
  )
}

export default Menu
