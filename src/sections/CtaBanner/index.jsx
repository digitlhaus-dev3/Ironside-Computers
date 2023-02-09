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
    switch (layout) {
      case layout?.toLowerCase() === 'layout 1':
        setImageSize('large-img')
        setTextPosition('content-bottom')
        setImageAlign('content-left')
        setlayoutClass('layout-1')
        break
      case layout?.toLowerCase() === 'layout 2':
        setImageSize('small-img')
        setTextPosition('content-top')
        setImageAlign('content-left')
        setlayoutClass('layout-2')
        break
      case layout?.toLowerCase() === 'layout 3':
        setImageSize('mid-img')
        setTextPosition('content-bottom')
        setImageAlign('content-right')
        setlayoutClass('layout-3')
        break
      case layout?.toLowerCase() === 'layout 4':
        setImageSize('small-img')
        setTextPosition('content-top')
        setImageAlign('content-right')
        setlayoutClass('layout-4')
        break
      case layout?.toLowerCase() === 'layout 5':
        setImageSize('small-img')
        setTextPosition('content-bottom')
        setImageAlign('content-left')
        setlayoutClass('layout-5')
        break
      default:
        setlayoutClass('layout-1')
    }
  }, [layoutClass])
  return (
    <>
      <div className="cta-banner d-flex align-v-center flex-wrap">
        <div
          className={(layoutClass, imageAlign)}
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="cta-image">
            <img className={imageSize} src={bannerImage?.src} />
          </div>
          <div className="cta-content">
            <div className={textPosition}>
              <h2 className="cta-heading">{bannerHeading}</h2> <p>{bannerBody}</p>
              <p>
                <a href={bannerLink ? '#' : bannerLink}>
                  {bannerLinkText ? 'Learn More' : bannerLinkText}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CtaBanner
