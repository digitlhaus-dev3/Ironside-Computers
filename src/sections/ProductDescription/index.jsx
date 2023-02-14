import React, { useState, useEffect } from 'react'
import Image from 'Components/Image'

const ProductDescription = ({ layout, description, header, image }) => {
  const [layoutClass, setLayoutClass] = useState()
  useEffect(() => {
    if (layout?.toLowerCase() === 'layout1') {
      setLayoutClass('layout1')
    } else if (layout?.toLowerCase() === 'layout2') {
      setLayoutClass('layout2')
    } else if (layout?.toLowerCase() === 'layout3') {
      setLayoutClass('layout3')
    } else if (layout?.toLowerCase() === 'layout4') {
      setLayoutClass('layout4')
    }
  }, [layout])

  return (
    <div className={layoutClass}>
      <div className="container">
        <Image src={image?.src} altext={image?.alt} />
        <div className="layoutDesc">
          <h3>{header}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
