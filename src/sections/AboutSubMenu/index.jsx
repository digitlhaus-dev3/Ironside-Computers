import React from 'react'
import Image from 'Components/Image'
import { HStack } from '@chakra-ui/react'

const AboutSubMenu = () => {
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
    <div>
      <HStack>
        <div>
          <h3>Company</h3>
          <ul>
            {company.map(items => {
              return (
                <HStack>
                  <l1>
                    <a href={items.link}> {items.name} </a>
                  </l1>
                </HStack>
              )
            })}
          </ul>
        </div>
        <div>
          <h3>Work With us</h3>
          <ul>
            {Work.map(items => {
              return (
                <HStack>
                  <l1>
                    <a href={items.link}> {items.name} </a>
                  </l1>
                </HStack>
              )
            })}
          </ul>
        </div>
      </HStack>
      <div>
        <HStack>
          <Image src={'https://i.ibb.co/JmNjdjF/Headphones-Customer-support-1.png'} alt="" />
          <p>
            1 (512) 696–1455
            <br />
            technicalsupport@ironsidecomputers.com
            <br />
            Monday – Friday 9am to 4:30pm CST
          </p>
        </HStack>
      </div>
    </div>
  )
}

export default AboutSubMenu
