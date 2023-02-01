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
import Logo from 'Components/Logo'
import Text from 'Components/Text'

/**
 * @typedef { import("lib/types").Media } Media
 * @typedef {{
 *  logoImage?: Media
 * }} FooterProps
 *
 * @param { FooterProps } props
 */
const Footer = ({ logoImage }) => (
  <Flex
    as="footer"
    role="contentinfo"
    align="center"
    flexDir="column"
    w="100%"
    mt={8}
    p={8}
    bg="brand.100"
  >
    <Flex
      alignSelf="flex-start"
      direction={{ base: 'column', md: 'row' }}
      align={{ base: 'flex-start', md: 'center' }}
    >
      <Container w={{ base: '24', md: '32' }}>
        <Logo image={logoImage} />
      </Container>
      {/* <Container
        px={{ base: '0', md: '14' }}
        py={{ base: '4', md: '0' }}
        color="gray.600"
        fontSize="sm"
      >
        <Link
          href="https://www.facebook.com/IronsideComputers/"
          title="Navigate to Facebook"
          aria-label="Navigate to Facebook"
        >
          <IconButton
            variant="iconWrapper"
            aria-label="Navigate to Facebook"
            size={8}
            icon={<Facebook />}
          />
        </Link>
        <Link
          href="https://twitter.com/IronsidePC/"
          title="Navigate to Twitter"
          aria-label="Navigate to Twitter"
        >
          <IconButton
            variant="iconWrapper"
            aria-label="Navigate to Twitter"
            size={8}
            icon={<Twitter />}
          />
        </Link>
        <Link
          href="https://instagram.com/ironsidecomputers"
          title="Navigate to Instagram"
          aria-label="Navigate to Instagram"
        >
          <IconButton
            variant="iconWrapper"
            aria-label="Navigate to Instagram"
            size={8}
            icon={<Instagram />}
          />
        </Link>
        <Link
          href="https://www.youtube.com/ironsidecomputers"
          title="Navigate to Youtube"
          aria-label="Navigate to Youtube"
        >
          <IconButton
            variant="iconWrapper"
            aria-label="Navigate to Youtube"
            size={8}
            icon={<YouTube />}
          />
        </Link>
        <Link
          href="https://www.twitch.tv/ironsidepc"
          title="Navigate to Twitch"
          aria-label="Navigate to Twitch"
        >
          <IconButton
            variant="iconWrapper"
            aria-label="Navigate to Twitch"
            size={8}
            icon={<Twitch />}
          />
        </Link>
        <Link
          href="https://www.tiktok.com/@ironsidecomputers "
          title="Navigate to TikTok"
          aria-label="Navigate to TikTok"
        >
          <IconButton
            variant="iconWrapper"
            aria-label="Navigate to TikTok"
            size={8}
            icon={<TikTok />}
          />
        </Link>
      </Container> */}
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

export default Footer
