import React from 'react'
import Image from 'Components/Image'

const HeroBanner = ({backgroundImage, image, header, description}) => {
  return (
    <div className='heroBanner'>
      <div
      className='bg-img'
        style={{
          backgroundImage: `url(${backgroundImage?.src})`,
        }}
      >
        <div className='heroBannerContent flex'>
          <div
            className='bannerImage'>
            <Image src={image?.src} altext={image?.alt} />
          </div>
          <div
            className='bannerContent'>
            <h2>{header}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
