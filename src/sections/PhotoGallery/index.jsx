import React from 'react'
import Slider from 'react-slick'
import Image from 'Components/Image'

const PhotoGallery = ({ image }) => {
  const settings = {
    arrow: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    rows: 2,
    autoplay: true,
    autoplayspeed: 2000,
    infinite: true,
  }
  return (
    <div className="container">
      <div className="photoGallery" id="gallery">
        <div className="container-2">
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
      </div>
    </div>
  )
}

export default PhotoGallery
