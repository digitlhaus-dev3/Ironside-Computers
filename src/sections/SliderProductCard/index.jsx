import React from 'react'

const SliderProductCard = ({
  backgroundImage,
  title,
  description,
  price,
  link,
  imgSrc,
  titleColor,
}) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage?.src})` }} className="product-card">
      <div className="product-content">
        <h3 style={{ color: titleColor }}>{title && title}</h3>
        <p>{description && description}</p>
        <div className="productCardImage">
          <p>starts at ${price && price}</p>
          <a href={link ? link : '#'}>Learn More</a>
          <img src={imgSrc && imgSrc.src} alt={imgSrc?.altText} />
        </div>
      </div>
    </div>
  )
}

export default SliderProductCard
