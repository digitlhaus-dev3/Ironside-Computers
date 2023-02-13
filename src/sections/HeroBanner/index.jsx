import React from 'react'
import Image from 'Components/Image'

const HeroBanner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=1060&t=st=1676266849~exp=1676267449~hmac=eb2108a184b61fbb9f96a6674cb918149554313d45818cb0b12db0d28c2b5806)`,
        }}
      >
        <div>
          <Image
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            altext="Ironside Series"
          />
        </div>
        <div>
          <h2>Ironside Series</h2>
          <p>
            The culmination of years of expertise, Ironside Series encapsulates everything we think
            a custom prebuilt gaming PC should be. A simple aesthetic to compliment any setup, and
            preselected internal components we trust and use in our own systems.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
