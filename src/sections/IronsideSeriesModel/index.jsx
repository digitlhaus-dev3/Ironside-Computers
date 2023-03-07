import React from 'react'
import Image from 'Components/Image'
import IronsideSeriesProductModel from 'Components/IronsideSeriesProductModel'
import Slider from 'react-slick'

const IronsideSeriesModel = ({ ironsideSeries, decription, backgroundImage, image }) => {
  const learnMore = () => {
    // eslint-disable-next-line no-console
    console.log('learm more activated')
  }
  const labelName = ironsideSeries?.products?.map(event => {
    return {
      product: event,
      id: event.id,
      label: event?.name?.split('|'),
      cutomFields: event?.customFields,
      price: event?.price,
    }
  })
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    responsive: [
      {
        breakpoint: 99999,
        settings: 'unslick',
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          variableWidth: true,
        },
      },
    ],
  }
  return (
    <div className="ironSideSeriesModal">
      <div className="container">
        <div className="bg-img" style={{ backgroundImage: `url(${backgroundImage?.src})` }}></div>
        <div className="modalContent">
          <h3>{ironsideSeries?.name}</h3>
          <p>{decription}</p>
          <button className="btn-2" onClick={learnMore}>
            Learn more
          </button>
          <div className="model d-flex align-v-center">
            <Image className="product-img" src={`${image?.src}`} sizes="100px" />
            <div className="level-block align-v-center justify-center d-flex flex-wrap">
              <Slider {...settings}>
                {labelName?.map(event => {
                  return (
                    <React.Fragment key={event.id}>
                      <IronsideSeriesProductModel
                        product={event.product}
                        id={event.id}
                        label={event.label}
                        cutomFields={event.cutomFields}
                        price={event.price}
                      />
                    </React.Fragment>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IronsideSeriesModel
