import React from 'react'
import styles from './styles.module.css'

const CtaBannerV2 = () => {
  return (
    <>
      <div className='cta-banner-v2 d-flex align-right flex-wrap'>
        <div className='cta-content'>
          <h2 className='cta-heading'>
            Forge a pc
          </h2>
          <p>Pick the components you want with our advanced customizer and we’ll create the prebuilt PC of your dreams.</p>
          <p><a href=''>Learn More</a></p>
        </div>
        <div className='cta-image'>
          <img className='img-mid' src="https://f.shgcdn.com/8f384e15-cfda-4490-8108-1d5032ca9572/" />
        </div>
      </div>
    </>
  )
}

export default CtaBannerV2
