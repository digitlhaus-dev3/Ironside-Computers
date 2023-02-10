import React, { useState } from 'react'
import Slider from 'react-slick'
import SliderCard from 'Components/SliderCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ProductSlider(sliderData) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    afterChange: current => setCurrentSlide(current),
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
    <div>
      <h2>Current Slide: {currentSlide}</h2>
      <Slider {...settings}>
        {sliderData.map(item => {
          return (
            <SliderCard
              backgroundImage={item.backgroundImage}
              title={item.title}
              description={item.description}
              price={item.price}
              link={item.link}
              imgSrc={item.src}
              altText={item.altText}
            />
          )
        })}
      </Slider>
    </div>
  )
}

export default ProductSlider
