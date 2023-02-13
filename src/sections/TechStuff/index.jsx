import React from 'react'

const TechStuff = (backgroundImage) => {
  return (
    <div style={{backgroundImage:`url(${backgroundImage?.backgroundImage?.src})`}}>
      <h2>Tech Stuff</h2>
      <div>
        <h3>Ports</h3>
        <ul>
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
      <div>
        <h3>Dimensions</h3>
        <ul>
          <li>24” Length</li>
          <li>12” Width</li>
          <li>16” Height</li>
        </ul>
      </div>
      <div>
        <h3>Warranty</h3>
        <p>
          Our signature prebuilt series featuring classic designs and tried and true performance.
          Our signature prebuilt series featuring classic designs and tried and true performance.Our
          signature prebuilt series featuring classic designs and tried and true performance.Our
          signature prebuilt series featuring classic designs and tried and true performance.
        </p>
      </div>
    </div>
  )
}

export default TechStuff
