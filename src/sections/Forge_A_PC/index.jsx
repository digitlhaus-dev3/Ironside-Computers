import React from 'react'
import Image from 'Components/Image'
import Forge_Model from 'Components/Forge_Model'
import Forge_Model_Main from '../../components/Forge_Model_Main'

const Forge_A_PC = ({ image, intel1, intel2, amd1, amd2, product }) => {
  const [categorySelected, setcategorySelected] = React.useState({
    selected: '',
  })
  return (
    <div className="forge-pc d-flex">
      <div className="container-2">
        <div className="pc-img">
          <Image id="hello" src={image?.src} />
        </div>
        <div>
          <h1>forge a pc</h1>
          <p>
            Pick the components you want with our advanced customizer and we’ll create the prebuilt
            PC of your dreams.
          </p>
          {categorySelected.selected === '' ? (
            <Forge_Model_Main category={categorySelected} product={product} intel1={intel1} intel2={intel2} amd1={amd1} amd2={amd2} />
          ) : (
            <Forge_Model category={categorySelected} product={product} intel1={intel1} intel2={intel2} amd1={amd1} amd2={amd2} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Forge_A_PC
