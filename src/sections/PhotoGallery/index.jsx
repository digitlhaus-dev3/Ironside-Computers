import React from 'react'
import Slider from 'react-slick'
import Image from 'Components/Image'

const PhotoGallery = ({ image }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplayspeed: 2000,
    slidesToShow: 6,
    rows: 2,
    autoplay: true,
    infinite: true,
    autoplayspeed: 2000,
    slidesToScroll: 2,
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
    <div className="photoGallery">
      <div className="container">
        <Slider {...settings}>
          {image?.productImages.map(event => {
            return <div className='galleryImage'><Image src={event?.productImage?.src} altext={event?.productImage?.alt}></Image></div>
          })}
        </Slider>
      </div>
    </div>
  )
}

export default PhotoGallery
