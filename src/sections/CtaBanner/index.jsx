import React from 'react'
import styles from './styles.module.css'

const CtaBanner = ({bannerImage}) => {
  return (
    <>
      <div className='cta-banner'>
        <div className='cta-image'>
          <img src={bannerImage?.src} />
        </div>
        <div className='cta-content'>
          <h2 className='cta-heading'>
            IRONSIDE SERIES
          </h2>
          <p>Our signature prebuilt series featuring classic designs and tried and true performance.</p>
          <p><a href=''>Learn More</a></p>
        </div>
      </div>
    </>
  )
}

export default CtaBanner
