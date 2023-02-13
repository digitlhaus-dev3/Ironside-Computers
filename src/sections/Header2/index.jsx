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
import Container from 'Components/Container'
import Grid from 'Components/Grid'
import Logo from 'Components/Logo'

import HStack from 'Components/HStack'

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
const Header2 = ({ logoImage, sticky }) => {
  return (
    <Grid as="header" position={sticky ? 'sticky' : 'initial'} top="0" zIndex="docked">
      <div className="container">
        <div className="header-main">
          <div className="header-left">
            <Container
              gridArea="logo"
              justifySelf={{ base: 'center', md: 'left' }}
              w={['20', '32']}
              className="logo-icon"
            >
              <Logo image={logoImage} />
            </Container>

            <h1> ironside series </h1>
          </div>
          <div className="header-right">
            <HStack gridArea="cart" justifySelf="right" spacing="4">
              <a href="#">Overview</a>
              <a href="#">Gallery</a>
              <a href="#">Tech Specs</a>
              <a href="#">Buy Now</a>
            </HStack>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default Header2
