import React from 'react'
import Image from 'Components/Image'
import { HStack } from '@chakra-ui/react'

const AboutSubMenu = ({ aboutImage }) => {
  console.log(aboutImage)
  const company = [
    {
      name: 'Support',
      link: '#',
    },
    {
      name: 'About',
      link: '#',
    },
    {
      name: 'FAQ',
      link: '#',
    },
    {
      name: 'Warranty',
      link: '#',
    },
  ]
  const Work = [
    {
      name: 'Sponsorship',
      link: '#',
    },
    {
      name: 'Employment',
      link: '#',
    },
    {
      name: 'Enterprise Solution',
      link: '#',
    },
  ]
  return (
    <div className='about-us-mega-menu'>
      <div className='col'>
        <div>
          <h4>Company</h4>
          <ul>
            {company.map(items => {
              return (
                  <l1>
                    <a href={items.link}> {items.name} </a>
                  </l1>
              )
            })}
          </ul>
        </div>
        <div>
          <h4>Work With us</h4>
          <ul>
            {Work.map(items => {
              return (
                  <l1>
                    <a href={items.link}> {items.name} </a>
                  </l1>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='about-us-bottom'>
        <HStack>
          <span className="contact-icon"></span>
          <p>
            <strong>1 (512) 696–1455</strong>
            technicalsupport@ironsidecomputers.com
            Monday – Friday 9am to 4:30pm CST
          </p>
        </HStack>
      </div>
    </div>
  )
}

export default AboutSubMenu
