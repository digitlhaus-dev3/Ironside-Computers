import { layout } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const ProductDescription = () => {
  const [layoutClass,setLayoutClass] = useState();
  if(layout.toLowerCase() === 'layout1')
  {
    setLayoutClass('layout1')
  }
  if(layout.toLowerCase() === 'layout2')
  {
    setLayoutClass('layout2')
  }
  if(layout.toLowerCase() === 'layout3')
  {
    setLayoutClass('layout3')
  }
  if(layout.toLowerCase() === 'layout4')
  {
    setLayoutClass('layout4')
  }
  return (
    <div>
      <div className={layoutClass}>
        <Image src={image?.src} altext={image?.alt} />
        <div>
          <h3>{header}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
