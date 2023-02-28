import React from 'react'
import Image from 'Components/Image'
import IronsideSeriesProductModel from 'Components/IronsideSeriesProductModel'

const IronsideSeriesModel = ({ ironsideSeries, decription, backgroundImage, image }) => {
  const learnMore = () => {
    // eslint-disable-next-line no-console
    console.log('learm more activated')
  }
  const labelName = ironsideSeries?.products?.map(event => {
    return {
      label: event?.name?.split('|'),
      cutomFields: event?.customFields,
      price: event?.price,
    }
  })
  console.log('labelName', labelName)
  return (
    <div className="ironSideSeriesModal">
      <div className="container">
        <div className="bg-img" style={{ backgroundImage: `url(${backgroundImage?.src})` }}></div>
        <div className="modalContent">
          <h2>{ironsideSeries?.name}</h2>
          <p>{decription}</p>
          <button className="btn-2" onClick={learnMore}>
            Learn more
          </button>
          <div className="d-flex align-v-center">
            <Image className="product-img" src={`${image?.src}`} sizes="100px" />
            {labelName?.map(event => {
              return (
                <React.Fragment key={event.id}>
                  <IronsideSeriesProductModel
                    label={event.label}
                    cutomFields={event.cutomFields}
                    price={event.price}
                  />
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IronsideSeriesModel
