import React from 'react'

const IronsideSeriesProductModel = ({ label, description, price }) => {
  const addToCart = () => {
    // eslint-disable-next-line no-console
    console.log('Product added to cart')
  }

  return (
    <div className='levels'>
      <h3>{label && label[1]}</h3>
      <ul className='d-flex flex-direction list-none'>
        <li>{description && description[0]?.replace(/<(.|\n)*?>/g, '')}</li>
        <li>{description && description[1]?.replace(/<(.|\n)*?>/g, '')}</li>
        <li>{description && description[2]?.replace(/<(.|\n)*?>/g, '')} </li>
        <li>{description && description[3]?.replace(/<(.|\n)*?>/g, '')} </li>
        <li>{description && description[4]?.replace(/<(.|\n)*?>/g, '')}</li>
        <li>{description && description[5]?.replace(/<(.|\n)*?>/g, '')}</li>
      </ul>
      <p className='shipping-day mb-0'>{description && description[6]?.replace(/<(.|\n)*?>/g, '')}</p>
      <p className='price mb-0'>{price && price}</p>
      <button className='btn-2' onClick={addToCart}>Add to cart</button>
    </div>
  )
}
export default IronsideSeriesProductModel