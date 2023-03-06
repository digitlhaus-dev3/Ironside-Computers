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
import { useCart } from 'frontend-checkout'
import Link from 'Components/Link'
import Button from 'Components/Button'
import Container from 'Components/Container'
import Grid from 'Components/Grid'
import Logo from 'Components/Logo'
import Menu from 'Components/Menu'
import { useCustomerState } from 'frontend-customer'
import HStack from 'Components/HStack'
import useStore from 'frontend-store'

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
const Header = ({ logoImage, menu, sticky, whiteTheme }) => {
  const { isLoggedIn } = useCustomerState()
  const [{ items = [] }, { showCart }] = useCart()
  const [muteVol, setMuteVol] = React.useState(true)
  const [store, setStore] = useStore()

  const volControl = () => {
    setMuteVol(!muteVol)
    setStore({ isVolMute: !muteVol })
  }

  const itemsQuantity = items.reduce((acc, currentItem) => acc + currentItem.quantity, 0)

  const cartIconAriaLabel = !!itemsQuantity ? `Cart with ${itemsQuantity} items.` : 'Cart is empty.'

  const menuLinks = menu && menu.menuLinks

  return (
    <Grid as="header" position={sticky ? 'sticky' : 'initial'} top="0" zIndex="docked">
      <div className="container">
        <div className="header-main" id={whiteTheme && 'whiteTheme'}>
          <div className="header-left">
            <Container
              gridArea="logo"
              justifySelf={{ base: 'center', md: 'left' }}
              w={['20', '32']}
              className="logo-icon"
            >
              <Logo image={logoImage} />
            </Container>

            {menu ? (
              <Container gridArea="menu" className="nav-links">
                <div className="navigation-links">
                  <Menu links={menuLinks} />
                </div>
              </Container>
            ) : null}
          </div>
          <div className="header-right">
            <HStack gridArea="cart" justifySelf="right" spacing="4">
              <Link
                title="Price"
                aria-label="Price"
                className="usdIcon"
              >
                <span>USD</span>
              </Link>
              <Link onClick={showCart} aria-label={cartIconAriaLabel} className="cart"></Link>
              <Link
                // href={isLoggedIn ? ACCOUNT_URL : ACCOUNT_LOGIN_URL}
                title="Navigate to account"
                aria-label="Navigate to my account"
                className="account"
              ></Link>
              <Button
                onClick={volControl}
                title="Volume"
                aria-label="controll volume"
                className={muteVol ? 'mute' : 'volume'}
              />
            </HStack>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default Header
