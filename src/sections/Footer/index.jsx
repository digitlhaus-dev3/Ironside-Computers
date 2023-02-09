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
import Flex from 'Components/Flex'
import Link from 'Components/Link'
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
  return (
    <Flex as="footer" role="contentinfo" w="100%" className="footer">
      <div className="container">
        <div className="footerIcons">
          {footer?.footer?.map(item => {
            return (
              <Link href={item?.footerLink} title={item?.name} aria-label={item?.name}>
                <Image src={item?.footerImage?.src} alt={item?.name} />
              </Link>
            )
          })}
        </div>

        <div className="footerText">
          <p>&copy; 2022 Ironside Computers&nbsp;-&nbsp;</p>
          <p>
            <a href="#">Contact Us.</a>
          </p>
        </div>
      </div>
    </Flex>
  )
}
export default Footer
