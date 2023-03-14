import React from 'react'
import Slider from 'react-slick'
import Image from 'Components/Image'

const PhotoGallery = ({ image }) => {
  const settings = {
    arrow: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    rows: 2,
    autoplay: true,
    autoplayspeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 666,
        settings: 'unslick',
      },
    ],
  }
  return (
    // <div className="container-2">
      <div className="photoGallery" id="gallery">
          <Slider {...settings}>
            {image?.productImages.map(event => {
              return (
                <div className="galleryImage">
                  <Image
                    key={event.id}
                    src={event?.productImage?.src}
                    altext={event?.productImage?.alt}
                  ></Image>
                </div>
              )
            })}
          </Slider>
        </div>
  )
}

export default PhotoGallery
