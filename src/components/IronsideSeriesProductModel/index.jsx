import React from 'react'

const IronsideSeriesProductModel = ({
  level,
  chassisColor,
  processor,
  graphics,
  memory,
  ram,
  windows,
  shippingStatus,
  price,
}) => {
  const addToCart = () => {
    // eslint-disable-next-line no-console
    console.log('Product added to cart')
  }

  return (
    <div>
      <h3>{level}</h3>
      <ul>
        <li>{chassisColor}</li>
        <li>{processor}</li>
        <li> {graphics} </li>
        <li>{memory} </li>
        <li>{ram}</li>
        <li>{windows}</li>
      </ul>
      <p>{shippingStatus}</p>
      <p>{price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default IronsideSeriesProductModel
