import React, { useState } from 'react'
import { useEffect } from 'react'

const CtaBanner = ({
  bannerImage,
  bannerHeading,
  bannerBody,
  layout,
  bannerLink,
  bannerLinkText,
  backgroundImage,
}) => {
  const [layoutClass, setlayoutClass] = useState('')
  const [imageSize, setImageSize] = useState('large-img')
  const [textPosition, setTextPosition] = useState('content-bottom')
  const [imageAlign, setImageAlign] = useState('content-left')

  useEffect(() => {
    if (layout?.toLowerCase() === 'layout 1') {
      setImageSize('large-img')
      setTextPosition('content-bottom')
      setImageAlign('content-left')
      setlayoutClass('layout-1')
    } else if (layout?.toLowerCase() === 'layout 2') {
      setImageSize('small-img')
      setTextPosition('content-top')
      setImageAlign('content-left')
      setlayoutClass('layout-2')
    } else if (layout?.toLowerCase() === 'layout 3') {
      setImageSize('mid-img')
      setTextPosition('content-bottom')
      setImageAlign('content-right')
      setlayoutClass('layout-3')
    } else if (layout?.toLowerCase() === 'layout 4') {
      setImageSize('small-img')
      setTextPosition('content-top')
      setImageAlign('content-left')
      setlayoutClass('layout-4')
    } else if (layout?.toLowerCase() === 'layout 5') {
      setImageSize('small-img')
      setTextPosition('content-top')
      setImageAlign('content-right')
      setlayoutClass('layout-5')
    } else if (layout?.toLowerCase() === 'layout 6') {
      setImageSize('small-img')
      setTextPosition('content-bottom')
      setImageAlign('content-left')
      setlayoutClass('layout-6')
    } else setlayoutClass('layout-1')
  }, [layoutClass])
  return (
    <>
      <div className="container">
        <div className="cta-banner flex align-v-center flex-wrap">
          <div
            className={layoutClass}
          >
            <div className={imageAlign}>
              <div className="cta-image">
                <img className={imageSize} src={bannerImage?.src} />
                <div
                  id="background-image"
                  className='bg-img'
                  style={{
                    backgroundImage: `url(${backgroundImage?.src})`,
                  }}
                />
              </div>
              <div className={textPosition}>
                <div className="cta-content">
                  <h2 className="cta-heading">{bannerHeading}</h2> <p>{bannerBody}</p>
                  <p>
                    <a href={bannerLink}>{bannerLinkText ? bannerLinkText : 'Learn More'}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CtaBanner
