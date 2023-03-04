import React from 'react'
import SliderCard from 'Components/SliderCard'

const SliderProductCard = ({ sliderData, enableWhiteTheme }) => {
  return (
    <div className={enableWhiteTheme && 'whiteTheme'}>
      <div className="container-2">
        <div className="product-grid">
          {sliderData?.sliderData?.map(item => {
            return (
              <SliderCard
                key={item._id}
                backgroundImage={item.backgroundImage.src}
                title={item.title}
                description={item.description}
                price={item.price}
                link={item.link}
                imgSrc={item.imgSrc?.src}
                altText={item.altText}
                titleColor={item.titleColor}
                newProduct={item.newProduct}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SliderProductCard
