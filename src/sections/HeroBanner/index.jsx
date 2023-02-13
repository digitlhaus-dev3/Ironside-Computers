import React from 'react'
import Image from 'Components/Image'

const HeroBanner = ({backgroundImage, image, header, description}) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage?.src})`,
        }}
      >
        <div>
          <Image src={image?.src} altext={image?.alt} />
        </div>
        <div>
          <h2>{header}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
