import React from 'react'
import Image from 'Components/Image'
import IronsideSeriesProductModel from 'Components/IronsideSeriesProductModel'

const IronsideSeriesModel = ({ ironsideSeries,decription,backgroundImage,image }) => {
  const learnMore = () => {
    // eslint-disable-next-line no-console
    console.log('learm more activated')
  }
  const labelName = ironsideSeries?.products?.map(event => {
    return {
      label: event?.name?.split('|'),
      description: event?.description?.split(','),
      price: event?.price,
    }
  })
  return (
    <div style={{ backgroundImage: `url(${backgroundImage?.src})` }}>
      <h2>{ironsideSeries?.name}</h2>
      <p>{decription}</p>
      <button onClick={learnMore}>Learn more</button>
      <Image src={`${image?.src}`} sizes="100px" />
      {labelName?.map(event => {
        return (
          <React.Fragment key={event.id}>
            <IronsideSeriesProductModel
              label={event.label}
              description={event.description}
              price={event.price}
            />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default IronsideSeriesModel
