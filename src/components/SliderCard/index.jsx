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
  tittleColor,
}) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className="product-card">
      <div className="product-content">
        <h3 style={{ color: tittleColor }}>{title}</h3>
        <p>{description}</p>
        <div className="productCardImage">
          <p>starts at ${price}</p>
          <a href={link ? link : '#'}>Learn More</a>
          <img src={imgSrc} alt={altText} />
        </div>
      </div>
    </div>
  )
}

export default SliderCard
