import React from 'react'
import Slider from 'react-slick'
import Image from 'Components/Image'

const PhotoGallery = ({ image }) => {
  const settings = {
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    slidesToShow: 6,
    rows: 2,
    autoplay: true,
    infinite: true,
    autoplayspeed: 2000,
    slidesToScroll: 2,
  }
  return (
    <div className="photoGallery">
      <div className="container">
        <Slider {...settings}>
          {image?.productImages.map((event) => {
            return <div className='galleryImage'><Image src={event?.productImage?.src} altext={event?.productImage?.alt}></Image></div>
          })}
        </Slider>
      </div>
    </div>
  )
}

export default PhotoGallery
