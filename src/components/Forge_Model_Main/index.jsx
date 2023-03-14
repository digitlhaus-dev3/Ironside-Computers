import React from 'react'
import Image from 'Components/Image'
import Forge_Model from '../Forge_Model'

const Forge_Model_Main = ({ category, product, intel1, intel2, amd1, amd2 }) => {
  const [categorySelected, setcategorySelected] = React.useState({
    selected: '',
  })
  return (
    <>
      {categorySelected.selected === '' ? (
        <ul className="processors d-flex list-none flex-wrap">
          <li>
            <div className="processor">
              <Image src={intel1?.src} />
              <p>
                <span>Intel Core i3, i5, i7, and i9 CPUs</span>
              </p>
              <p>
                {' '}
                Socket 1151 - Socket 1700 Up to 16 Core Processors Dual Channel DDR4 Memory Up to
                128GB of RAM
              </p>
              <a className="btn-2" onClick={() => setcategorySelected({ selected: 'Intel' })}>
                Customize
              </a>
            </div>
          </li>
          <li>
            <div className="processor">
              <Image src={intel2?.src} />
              <p>
                <span>Intel X Series CPUs</span>
              </p>
              <p>
                Socket 2066 Up to 18 Core Processors Quad Channel DDR4 Memory Up to 256GB of RAM
              </p>
              <a className="btn-2" onClick={() => setcategorySelected({ selected: 'IntelX' })}>
                Customize
              </a>
            </div>
          </li>
          <li>
            <div className="processor">
              <Image src={amd1?.src} />
              <p>
                <span>AMD Ryzen CPUs</span>
              </p>
              <p>Socket AM4 Up to 16 Core Processors Dual Channel DDR4 Memory Up to 128GB of RAM</p>
              <a className="btn-2" onClick={() => setcategorySelected({ selected: 'AMDRyzen' })}>
                Customize
              </a>
            </div>
          </li>
          <li>
            <div className="processor">
              <Image src={amd2?.src} />
              <p>
                <span>AMD Threadripper CPUs</span>
              </p>
              <p>
                Socket sTRX4 Up to 16 Core Processors Dual Channel DDR4 Memory Up to 128GB of RAM
              </p>
              <a
                className="btn-2"
                onClick={() => setcategorySelected({ selected: 'AMDThreadripper' })}
              >
                Customize
              </a>
            </div>
          </li>
        </ul>
      ) : (
        <Forge_Model category={categorySelected} product={product} intel1={intel1} intel2={intel2} amd1={amd1} amd2={amd2} />
      )}
    </>
  )
}

export default Forge_Model_Main
