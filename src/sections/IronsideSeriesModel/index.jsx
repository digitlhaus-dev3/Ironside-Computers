import React from 'react'
import Image from 'Components/Image'
import IronsideSeriesProductModel from 'Components/IronsideSeriesProductModel'

const IronsideSeriesModel = () => {
  const learnMore = () => {
    // eslint-disable-next-line no-console
    console.log('learm more activated')
  }
  const array = [
    {
      idL: '1',
      level: 'level 1',
      chassisColor: 'black chassis',
      processor: 'i3-12100F Processor',
      graphics: 'GTX 1650 4GB Graphics',
      memory: '16GB DDR4 Memory',
      ram: '256GB NVMe M.2',
      windows: 'Windows 11 Home',
      shippingStatus: 'ships next day',
      price: '$944',
    },
    {
      idL: '2',
      level: 'level 1',
      chassisColor: 'black chassis',
      processor: 'i3-12100F Processor',
      graphics: 'GTX 1650 4GB Graphics',
      memory: '16GB DDR4 Memory',
      ram: '256GB NVMe M.2',
      windows: 'Windows 11 Home',
      shippingStatus: 'ships next day',
      price: '$944',
    },
    {
      idL: '3',
      level: 'level 1',
      chassisColor: 'black chassis',
      processor: 'i3-12100F Processor',
      graphics: 'GTX 1650 4GB Graphics',
      memory: '16GB DDR4 Memory',
      ram: '256GB NVMe M.2',
      windows: 'Windows 11 Home',
      shippingStatus: 'ships next day',
      price: '$944',
    },
  ]

  return (
    <div style={{ backgroundImage: `url('https://i.ibb.co/tb10780/highlight-lava-1-1-1.png')` }}>
      <h2>Model 1</h2>
      <p>Mid tower, compact case.</p>
      <button onClick={learnMore}>Learn more</button>
      <Image src={'https://i.ibb.co/wMLVdWn/Model-I-Black-Case-Image-1-1.png'} sizes="100px" />
      {array.map(event => {
        return (
          <React.Fragment key={event.id}>
            <IronsideSeriesProductModel
              level={event.level}
              chassisColor={event.chassisColor}
              processor={event.processor}
              graphics={event.graphics}
              memory={event.memory}
              ram={event.ram}
              windows={event.windows}
              shippingStatus={event.shippingStatus}
              price={event.price}
            />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default IronsideSeriesModel
