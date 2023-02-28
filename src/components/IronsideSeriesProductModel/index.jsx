import React from 'react'
import AddToCartButton from 'Components/AddToCartButton'

const IronsideSeriesProductModel = ({ product, id, label, price, cutomFields }) => {
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
      <AddToCartButton
        className="btn-2"
        product={id}
        options={product?.modifiers.map(event => {
          return {
            id: event.id,
            optionId: event?.optionValues?.find(value => value?.isDefault)?.id,
          }
        })}
        quantity={1}
        availability={true}
        isLoading={false}
      />
    </div>
  )
}
export default IronsideSeriesProductModel
