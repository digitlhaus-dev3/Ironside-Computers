import React, { useState } from 'react'
import Slider from 'react-slick'
import SliderCard from 'Components/SliderCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ProductSlider({ sliderData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplayspeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="productSlider">
      <Slider {...settings}>
        {sliderData?.productSlider?.map(item => {
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
              tittleColor={item.tittleColor}
            />
          )
        })}
      </Slider>
    </div>
  )
}

export default ProductSlider
