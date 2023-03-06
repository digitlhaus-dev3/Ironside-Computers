import React from 'react'
import Container from 'Components/Container'
import Heading from 'Components/Heading'

const SliderCard = ({
  backgroundImage,
  title,
  description,
  price,
  link,
  imgSrc,
  altText,
  titleColor,
  newProduct,
}) => {
  return (         
    <div className="product-card">
      <div style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-img">
      </div>
      <div className="product-content">
          <h3 style={{ color: titleColor }}>{title}</h3>
          <div className="newProduct">{newProduct && <p>New</p>}</div>
          <p className="product-desc">{description}</p>
          <p>
            <strong>starts at ${price}</strong>
          </p>
          <a href={link ? link : '#'} className="btn-2">
            Learn More
          </a>
          <div className="productCardImage">
            <img src={imgSrc} alt={altText} height="464px" width="416px"/>
          </div>
        </div>
    </div>
  )
}

export default SliderCard
