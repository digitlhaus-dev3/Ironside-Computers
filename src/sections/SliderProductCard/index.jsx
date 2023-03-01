import React from 'react'

const SliderProductCard = ({
  backgroundImage,
  title,
  description,
  price,
  link,
  imgSrc,
  altText,
  titleColor,
}) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className="product-card">
      <div className="product-content">
        <h3 style={{ color: titleColor }}>{title}</h3>
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

export default SliderProductCard
