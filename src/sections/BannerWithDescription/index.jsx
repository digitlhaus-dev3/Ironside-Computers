import React from 'react'
import Image from 'Components/Image'

const BannerWithDescription = ({ backgroundImage, header, description, image }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage?.src})`,
        }}
      >
        <div>
          <h3>{header}</h3>
          <p>{description}</p>
        </div>
        <div>
          <Image src={image?.src} altext={image?.alt} />
        </div>
      </div>
    </div>
  )
}

export default BannerWithDescription
