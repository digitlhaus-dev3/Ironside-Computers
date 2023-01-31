import React from 'react'
import styles from './styles.module.css'
import Video from "frontend-ui/Video"
import { Img } from '@chakra-ui/react'
import Carousel from '../../components/Carousel/index'

const Banner = () => {
  return (
    <>
      <div className='bannerCarousel'>
        <ul className='list-none'>
          <li>  
            <Img src='https://previews.123rf.com/images/birillo81/birillo811410/birillo81141000048/32895163-turin-torino-panoramic-composition-7000px-x-3000px-.jpg'/>
          </li>
          <li>
            <Video
              poster="https://f.shgcdn.com/7e53bfca-8e38-4e56-8650-e1d7001544b8/"
              autoPlay
            >
              <source src="https://f.shgcdn.com/147c79f5-1b1a-4428-8b0e-7079cde26003/" />
            </Video>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Banner