import React from 'react'
import styles from './styles.module.css'

const CtaBanner = () => {
  return (
    <>
      <div className='cta-banner'>
        <div className='cta-image'>
          <img src='https://f.shgcdn.com/8f384e15-cfda-4490-8108-1d5032ca9572/' />
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
