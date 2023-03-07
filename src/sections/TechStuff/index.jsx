import React from 'react'
import { Image } from '@chakra-ui/react'

const TechStuff = backgroundImage => {
  return (
    <div className="container" id='techstuff'>
      <div
        className="techStuff"
      >
        <Image className='bg-img' src={backgroundImage?.backgroundImage?.src}></Image>
        <h2>Tech Stuff</h2>
        <div className="techDesc flex">
          <div>
            <div className="box-bg">
              <h3>Ports</h3>
              <ul className="list-none">
                <li>2 x USB-A </li>
                <li>2 x HDMI </li>
                <li>2 x USB-C</li>
                <li>2 x DVI</li>
                <li>2 x Display</li>
                <li>1 x Ethernet</li>
                <li>1 x Headphone</li>
                <li>1 x Mic</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="box-bg">
              <h3>Dimensions</h3>
              <ul className="list-none">
                <li>24” Length</li>
                <li>12” Width</li>
                <li>16” Height</li>
              </ul>
            </div>
          </div>
          <div className="description">
            <div className="box-bg">
              <h3>Warranty</h3>
              <p>
                Our signature prebuilt series featuring classic designs and tried and true
                performance. Our signature prebuilt series featuring classic designs and tried and
                true performance.Our signature prebuilt series featuring classic designs and tried
                and true performance.Our signature prebuilt series featuring classic designs and
                tried and true performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStuff
