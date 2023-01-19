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
import Cart from '../../assets/HeaderIcon/Cart.svg'
import User from '../../assets/HeaderIcon/Group.svg'
import USD from '../../assets/HeaderIcon/USD.svg'
import Volume from '../../assets/HeaderIcon/Volume.svg'
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
      templateAreas={{ base: "'menu logo cart'", md: "'logo menu cart'" }}
      templateColumns={{ base: '5rem 1fr 5rem', sm: '3rem 1fr 3rem', md: 'auto 1fr auto' }}
      alignItems="center"
      columnGap={{ base: 2, md: 10 }}
      px={{ base: 4, md: 8 }}
      py={4}
      bg="brand.100"
      w="100%"
      zIndex="docked"
    >
      <Container gridArea="logo" justifySelf={{ base: 'center', md: 'left' }} w={['20', '32']}>
        <Logo image={logoImage} />
      </Container>

      {menu ? (
        <Container gridArea="menu">
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

      <HStack gridArea="cart" justifySelf="right" spacing="4">
        {/* <Container display={{ base: 'none', md: 'block' }}>
           <SearchPopover onSearchSubmit={handleSearchSubmit} />
         </Container> */}
        <Link href={isLoggedIn ? ACCOUNT_URL : ACCOUNT_LOGIN_URL} title="Price" aria-label="Price">
          <IconButton
            variant="iconWrapper"
            aria-label="Price"
            size={8}
            icon={<img src={USD} />}
          />
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
                {<img src={Cart} />}
              </Badge>
            ) : (
              <img src={Cart} />
            )
          }
        />
        <Link
          href={isLoggedIn ? ACCOUNT_URL : ACCOUNT_LOGIN_URL}
          title="Navigate to account"
          aria-label="Navigate to my account"
        >
          <IconButton
            variant="iconWrapper"
            aria-label="Navigate to my account"
            size={8}
            icon={<img src={User} />}
          />
        </Link>
        <Link
          href={isLoggedIn ? ACCOUNT_URL : ACCOUNT_LOGIN_URL}
          title="Volume"
          aria-label="controll volume"
        >
          <IconButton
            variant="iconWrapper"
            aria-label="Controll Volume"
            size={8}
            icon={<img src={Volume} />}
          />
        </Link>
      </HStack>
    </Grid>
  )
}

export default Header
