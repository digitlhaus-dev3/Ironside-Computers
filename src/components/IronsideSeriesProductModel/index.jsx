import React from 'react'

const IronsideSeriesProductModel = ({ label, price, cutomFields }) => {
  const addToCart = () => {
    // eslint-disable-next-line no-console
    console.log('Product added to cart')
  }
  return (
    <div className="levels">
      <h3>{label && label[1]}</h3>
      <ul className="d-flex flex-direction list-none">
        {cutomFields?.map(event => {
          if (event.name !== 'Ships') return <li>{event.value}</li>
        })}
      </ul>
      <p className="shipping-day mb-0">
        {cutomFields?.map(event => {
          if (event.name === 'Ships') return event.value
        })}
      </p>
      <p className="price mb-0">${price && price}</p>
      <button className="btn-2" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  )
}
export default IronsideSeriesProductModel
