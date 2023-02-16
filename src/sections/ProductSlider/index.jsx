import React from 'react'
import Image from 'Components/Image'
import Slider from 'react-slick'

const PhotoGallery = ({ image }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <Slider {...settings}>
        {image?.productImages.map(event => {
          return <Image src={event?.productImage?.src} altext={event?.productImage?.alt}></Image>
        })}
      </Slider>
    </div>
  )
}

export default PhotoGallery
