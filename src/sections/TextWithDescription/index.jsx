import React from 'react'
const TextWithDescription = ({ title, description, whiteTheme }) => {
  return (
    <div className={whiteTheme && 'whiteTheme'}>
      <div className="textWithDesription">
        <div className="container-2">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
export default TextWithDescription
