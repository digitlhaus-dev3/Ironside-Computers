import React, { useState } from 'react'
import Slider from 'react-slick'
import SliderCard from 'Components/SliderCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ProductSlider({ sliderData, bannerHeading, bannerBody, bannerLink }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <div className="sliderSection">
      <div className="limitedEdition">
        <div className="cta-content">
          <h2 className="cta-heading">{bannerHeading}</h2> <p>{bannerBody}</p>
          <p>
            <a href={bannerLink ? '#' : bannerLink}>Learn More</a>
          </p>
        </div>
      </div>
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
                titleColor={item.titleColor}
              />
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default ProductSlider