import React from 'react'
import Image from 'Components/Image'

const BannerWithDescription = ({backgroundImage, header, description, image}) => {
  return (
    <div className='BannerWithDescription'>
      <div
        className='container bg-img'
        style={{
          backgroundImage: `url(${backgroundImage?.src})`,
        }}
      >
        <div className='desc flex-col'>
          <h3>{header}</h3>
          <p>{description}</p>
          <Image className="signature" src={image?.src} altext={image?.alt} />
        </div>
      </div>
    </div>
  )
}

export default BannerWithDescription
