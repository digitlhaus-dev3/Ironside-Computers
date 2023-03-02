import React from 'react'
const TextWithDescription = ({ title, description, whiteTheme }) => {
  return (
    <div className={whiteTheme && 'whiteTheme'}>
      <h2>{title}</h2> 
      <p>{description}</p>
    </div>
  )
}
export default TextWithDescription
