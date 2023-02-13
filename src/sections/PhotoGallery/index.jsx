import React from 'react'
import Slider from 'react-slick'

const PhotoGallery = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 6,
    speed: 500,
    rows: 2,
    slidesToScroll: 2,
  }
  return (
    <div>
      <Slider {...settings}>
        <div>
          {images ? (
            image.map(event => {
              <Image
                src={event?.src}
                altext={event?.alt}
              ></Image>
            })
          ) : (
            <div></div>
          )}
        </div>
      </Slider>
    </div>
  )
}

export default PhotoGallery
