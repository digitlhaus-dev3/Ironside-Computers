import React from 'react'
import styles from './styles.module.css'

const CtaBanner = ({bannerImage, bannerHeading, bannerBody}) => {
  return (
    <>
      <div className='cta-banner d-flex align-v-center flex-wrap'>
        <div className='cta-image'>
          <img className='img-large' src={bannerImage?.src} />
        </div>
        <div className='cta-content'>
          <h2 className='cta-heading'>
            {bannerHeading}
          </h2>
          <p>{bannerBody}</p>
          <p><a href=''>Learn More</a></p>
        </div>
      </div>
    </>
  )
}

export default CtaBanner
