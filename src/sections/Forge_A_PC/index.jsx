import React from 'react'
import Image from 'Components/Image'

const Forge_A_PC = ({ image }) => {
  return (
    <div>
      <div>
        <Image src={image.src} />
      </div>
      <div>
        <h3>forge a pc</h3>
        <p>
          Pick the components you want with our advanced customizer and we’ll create the prebuilt PC
          of your dreams.
        </p>
        <div>
          <div>
            <Image src={image.src} />
            <p>
              Intel Core i3, i5, i7, and i9 CPUs <br /> Socket 1151 - Socket 1700 Up to 16 Core
              Processors Dual Channel DDR4 Memory Up to 128GB of RAM
            </p>
            <a href="#">Customize</a>
          </div>
          <div>
            <Image src={image.src} />
            <p>
              Intel X Series CPUs <br /> Socket 2066 Up to 18 Core Processors Quad Channel DDR4
              Memory Up to 256GB of RAM
            </p>
            <a href="#">Customize</a>
          </div>
          <div>
            <Image src={image.src} />
            <p>
              AMD Ryzen CPUs <br /> Socket AM4 Up to 16 Core Processors Dual Channel DDR4 Memory Up
              to 128GB of RAM
            </p>
            <a href="#">Customize</a>
          </div>
          <div>
            <Image src={image.src} />
            <p>
              AMD Threadripper CPUs <br /> Socket sTRX4 Up to 16 Core Processors Dual Channel DDR4
              Memory Up to 128GB of RAM
            </p>
            <a href="#">Customize</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forge_A_PC
