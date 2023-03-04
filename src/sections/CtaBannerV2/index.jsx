import React from 'react'
import styles from './styles.module.css'

const CtaBannerV2 = ({bannerHeading,bannerBody,bannerImage}) => {
  return (
    <>
      <div className='cta-banner-v2 flex align-right flex-wrap'>
        <div className='cta-content'>
          <h2 className='cta-heading'>
            {bannerHeading}
          </h2>
          <p>{bannerBody}</p>
          <p><a href=''>Learn More</a></p>
        </div>
        <div className='cta-image'>
          <img className='img-mid' src={bannerImage?.src} />
        </div>
      </div>
    </>
  )
}

export default CtaBannerV2
