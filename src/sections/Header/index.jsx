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
import { useRouter } from 'frontend-router'
import { useCart } from 'frontend-checkout'
import Link from 'Components/Link'
import Badge from 'Components/Badge'
import Container from 'Components/Container'
import Grid from 'Components/Grid'
import Logo from 'Components/Logo'
import Menu from 'Components/Menu'
import SearchQueryInput from 'Components/SearchQueryInput'
import { useCustomerState } from 'frontend-customer'
import IconButton from 'Components/IconButton'
import HStack from 'Components/HStack'
import { AccountIcons, CartIcons, Volume, UsdIcons } from '../../components/Assets/index'
import './styles.css'

import { ACCOUNT_URL, ACCOUNT_LOGIN_URL } from 'Components/Data'

/**
 * @typedef { import("lib/types").Media } Media
 * @typedef { import("lib/types").Menu } MenuType
 * @typedef {{
 *  logoImage?: Media
 *  menu?: MenuType
 *  sticky?: boolean
 * }} HeaderProps
 *
 * @param { HeaderProps } props
 */
const Header = ({ logoImage, menu, sticky }) => {
  const router = useRouter()
  const { isLoggedIn } = useCustomerState()
  // @ts-ignore
  const [{ items = [] }, { showCart }] = useCart()

  // @ts-ignore
  const itemsQuantity = items.reduce((acc, currentItem) => acc + currentItem.quantity, 0)

  const cartIconAriaLabel = !!itemsQuantity ? `Cart with ${itemsQuantity} items.` : 'Cart is empty.'

  const handleSearchSubmit = React.useCallback(
    (/** @type { string } */ query) => router.push(`/search?q=${query}`),
    [router],
  )

  const menuLinks = menu && menu.menuLinks

  return (
    <Grid
      as="header"
      position={sticky ? 'sticky' : 'initial'}
      top="0"
      // templateAreas={{ base: "'menu logo cart'", md: "'logo menu cart'" }}
      // templateColumns={{ base: '5rem 1fr 5rem', sm: '3rem 1fr 3rem', md: 'auto 1fr auto' }}
      // alignItems="center"
      // columnGap={{ base: 2, md: 10 }}
      // px={{ base: 4, md: 8 }}
      // py={4}
      // bg="brand.100"
      // w="100%"
      zIndex="docked"
    >
      <div className="container">
        <div className="header-main">
          <div className="header-left">
            <Container
              className="header-icon"
              gridArea="logo"
              justifySelf={{ base: 'center', md: 'left' }}
              w={['20', '32']}
            >
              <Logo image={logoImage} />
            </Container>
            {menu ? (
              <Container gridArea="menu" className="nav-links">
                <Menu
                  content={
                    <SearchQueryInput
                      onClick={event => event.stopPropagation()}
                      onKeyDown={event => event.stopPropagation()}
                      onSearchSubmit={handleSearchSubmit}
                    />
                  }
                  links={menuLinks}
                />
              </Container>
            ) : null}
          </div>
          <div className="header-right">
            <HStack gridArea="cart" justifySelf="right" spacing="4">
              {/* <Container display={{ base: 'none', md: 'block' }}>
                <SearchPopover onSearchSubmit={handleSearchSubmit} />
              </Container> */}
              <Link
                href={isLoggedIn ? ACCOUNT_URL : ACCOUNT_LOGIN_URL}
                title="Price"
                aria-label="Price"
                className="usdIcon"
              >
                <span>USD</span>
              </Link>
              <IconButton
                variant="iconWrapper"
                aria-live="assertive"
                aria-label={cartIconAriaLabel}
                onClick={showCart}
                size={8}
                icon={
                  itemsQuantity ? (
                    <Badge badgeContent={itemsQuantity} variant="cart">
                      {<CartIcons />}
                    </Badge>
                  ) : (
                    <CartIcons />
                  )
                }
              />
              <Link
                href={isLoggedIn ? ACCOUNT_URL : ACCOUNT_LOGIN_URL}
                title="Navigate to account"
                aria-label="Navigate to my account"
              >
                <AccountIcons aria-label="Navigate to my account" />
              </Link>
              <Link
                href={isLoggedIn ? ACCOUNT_URL : ACCOUNT_LOGIN_URL}
                title="Volume"
                aria-label="controll volume"
                className="volume"
              >
                <Volume />
              </Link>
            </HStack>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default Header
