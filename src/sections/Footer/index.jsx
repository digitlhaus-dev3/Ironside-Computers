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
      align="center"
      flexDir="column"
      w="100%"
      mt={8}
      p={8}
      bg="#000000"
    >
      <Flex
        alignSelf="flex-start"
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'flex-end', md: 'center' }}
      >
        <Container
          px={{ base: '0', md: '14' }}
          py={{ base: '4', md: '0' }}
          color="gray.600"
          fontSize="sm"
        >
          {footer?.footer?.map(item => {
            return (
              <Link href={item?.footerLink} title={item?.name} aria-label={item?.name}>
                <IconButton
                  variant="iconWrapper"
                  aria-label={item?.name}
                  size={8}
                  icon={<img src={item?.footerImage?.src} />}
                />
              </Link>
            )
          })}
        </Container>
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
    </Flex>
  )
}
export default Footer
