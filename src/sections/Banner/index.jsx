import React from 'react'
import styles from './styles.module.css'
import Video from 'frontend-ui/Video'
import useStore from 'frontend-store'
import { Img } from '@chakra-ui/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Banner = ({ imageSrc, videoSrc }) => {
  const [{ isVolMute }] = useStore()
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }
  return (
    <>
      <div className="bannerCarousel box-shadow">
        <div className="list-none">
          <Slider {...settings}>
            <Img src={imageSrc?.src} />

            {isVolMute || isVolMute === undefined ? (
              <Video autoPlay loop muted>
                <source src={videoSrc?.src} />
              </Video>
            ) : (
              <Video autoPlay loop>
                <source src={videoSrc?.src} />
              </Video>
            )}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Banner
