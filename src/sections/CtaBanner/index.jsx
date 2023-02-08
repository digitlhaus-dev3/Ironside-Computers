import React, { useState } from 'react'
import { useEffect } from 'react'

const CtaBanner = ({ bannerImage, bannerHeading, bannerBody,layout }) => {
  const [imageSize, setImageSize] = useState('large-img')
  const [textPosition, setTextPosition] = useState('content-bottom')
  const [imageAlign, setImageAlign] = useState('content-left')

  useEffect(() => {
    if (layout?.toLowerCase() === 'layout 1') {
      setImageSize('mid-img')
      setTextPosition('content-top')
      setImageAlign('content-left')
    }
    if (layout?.toLowerCase() === 'layout 2') {
      setImageSize('mid-img')
      setTextPosition('content-bottom')
      setImageAlign('content-right')
    }
    if (layout?.toLowerCase() === 'layout 3') {
      setImageSize('small-img')
      setTextPosition('content-bottom')
      setImageAlign('content-left')
    }
    if (layout?.toLowerCase() === 'layout 4') {
      setImageSize('small-img')
      setTextPosition('content-top')
      setImageAlign('content-right')
    }
  }, [layout])

  return (
    <>
      <div className="cta-banner d-flex align-v-center flex-wrap">
        <div className={(textPosition, imageAlign)}>
          <div className="cta-image">
            <img className={imageSize} src={bannerImage?.src} />
          </div>
          <div className="cta-content content-top">
            <h2 className="cta-heading">{bannerHeading}</h2>
            <p>{bannerBody}</p>
            <p>
              <a href="#">Learn More</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CtaBanner
