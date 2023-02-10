import React from 'react'
import Container from 'Components/Container'
import Heading from 'Components/Heading'

const SliderCard = (backgroundImage, title, description, price, link, imgSrc, altText) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container>
        <Heading as="h3" size="l">
          {title}
        </Heading>
        <div>
          <p>{description}</p>
          <p>starts at ${price}</p>
          <a href={link ? link : '#'}>Learn More-{'>'}</a>
          <img src={imgSrc.src} alt={altText} />
        </div>
      </Container>
    </div>
  )
}

export default SliderCard
