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
import { useGoogleTagManagerActions } from '@frontend-sdk/google-tag-manager'
import Link from 'Components/Link'
import IconButton from 'Components/IconButton'

/**
 * @typedef { import("lib/types").Media } Media
 * @type { Media }
 */
const defaultImage = {
  name: 'Default Image',
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFCGZ1QZyNcTNfz7a4OoVfgCj9ngavPoP4Q&usqp=CAU',
  alt: 'IronSide Logo',
  height: 1440,
  width: 2850,
}

/**
 * @typedef {{
 *  image?: Media
 * }} LogoProps
 *
 * @param {LogoProps} props
 */
const Logo = ({ image }) => {
  const imageDetails = image || defaultImage
  const { src, alt = '', height = '', width = '' } = imageDetails

  const { track } = useGoogleTagManagerActions()
  const gtmEvent = {
    event: 'click_logo',
    message: 'Click on the logo image!',
  }

  return (
    <Link href="/" onClick={() => track(gtmEvent)}>
      <IconButton
        variant="iconWrapper"
        aria-label="Navigate to TikTok"
        size="xs"
        icon={
          <img
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFCGZ1QZyNcTNfz7a4OoVfgCj9ngavPoP4Q&usqp=CAU'
            }
            height="80"
            width="80"
            alt="logo"
          />
        }
      />
    </Link>
  )
}

export default Logo
