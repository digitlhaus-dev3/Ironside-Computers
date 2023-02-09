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
import Divider from 'Components/Divider'
import Flex from 'Components/Flex'
import Text from 'Components/Text'
import Link from 'Components/Link'
import IconButton from 'Components/IconButton'
import Image from 'Components/Image'

/**
 * @typedef { import("lib/types").Media } Media
 * @typedef {{
 *  logoImage?: Media
 * }} FooterProps
 *
 * @param { FooterProps } props
 */
const Footer = ({ footer }) => {
  console.log(footer)
  return (
    <Flex
      as="footer"
      role="contentinfo"
      w="100%"
      className="footer"
    >
      <div className='container'>
        <Flex
          alignSelf="center"
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'center' }}
        >
          {footer?.footer?.map(item => {
            return (
              <Link href={item?.footerLink} title={item?.name} aria-label={item?.name}>
                <Image src={item?.footerImage?.src} alt={item?.name}/>
              </Link>
            )
          })}
        </Flex>

        <Divider my="8" />

        <Flex direction={{ base: 'column', md: 'row' }} align="center">
          <Text color="gray.600" fontSize="sm">
            &copy; 2022 Ironside Computers&nbsp;-&nbsp;
          </Text>
          <Text color="gray.600" fontSize="sm">
            Contact Us.
          </Text>
        </Flex>
      </div>
    </Flex>
  )
}
export default Footer
