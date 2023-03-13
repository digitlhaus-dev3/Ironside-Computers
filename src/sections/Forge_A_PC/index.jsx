import React from 'react'
import Image from 'Components/Image'
import Forge_Model from '../../components/Forge_Model'

const Forge_A_PC = ({ image,intel1,intel2,amd1,amd2  }) => {
  const [categorySelected, setcategorySelected] = React.useState({
    selected: '',
  })

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
        {categorySelected.selected === '' ? (
          <div>
            <div>
              <Image src={intel1.src} />
              <p>
                Intel Core i3, i5, i7, and i9 CPUs <br /> Socket 1151 - Socket 1700 Up to 16 Core
                Processors Dual Channel DDR4 Memory Up to 128GB of RAM
              </p>
              <a onClick={() => setcategorySelected({selected:'IntelCore'})}>Customize</a>
            </div>
            <div>
              <Image src={intel2.src} />
              <p>
                Intel X Series CPUs <br /> Socket 2066 Up to 18 Core Processors Quad Channel DDR4
                Memory Up to 256GB of RAM
              </p>
              <a onClick={() => setcategorySelected({selected:'IntelX'})}>Customize</a>
            </div>
            <div>
              <Image src={amd1.src} />
              <p>
                AMD Ryzen CPUs <br /> Socket AM4 Up to 16 Core Processors Dual Channel DDR4 Memory
                Up to 128GB of RAM
              </p>
              <a onClick={() => setcategorySelected({selected:'AMDRyzen'})}>Customize</a>
            </div>
            <div>
              <Image src={amd2.src} />
              <p>
                AMD Threadripper CPUs <br /> Socket sTRX4 Up to 16 Core Processors Dual Channel DDR4
                Memory Up to 128GB of RAM
              </p>
              <a onClick={() => setcategorySelected({selected:'AMDThreadripper'})}>Customize</a>
            </div>
          </div>
        ) : (
          <Forge_Model category = {categorySelected} />
        )}
      </div>
    </div>
  )
}

export default Forge_A_PC
