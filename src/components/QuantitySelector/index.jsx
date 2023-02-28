import React from 'react'
import Select from '../Select'

const QuantitySelector = ({ minValue, maxValue, currentValue, onChange }) => {
  let quantities = []

  for (let value = minValue; value <= maxValue; value++) {
    quantities.push(value)
  }

  return (
    <Select onChange={onChange} size="xs" variant="unstyled" value={currentValue}>
      {quantities.map(quantity => (
        <option value={quantity}>quantity</option>
      ))}
    </Select>
  )
}

export default QuantitySelector
