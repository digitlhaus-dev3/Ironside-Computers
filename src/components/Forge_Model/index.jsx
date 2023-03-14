import React from 'react'
import Image from 'Components/Image'
import { CloseIcon } from '@chakra-ui/icons'

const Forge_Model = ({ category }) => {
  return (
    <>
      {category.selected === 'IntelCore' && (
        <div>
          <div className='d-flex justify-space-between close'>
          <h3>INTEL</h3>
            <CloseIcon
              onClick={() => {
                window.location.reload()
              }}
            ></CloseIcon>
          </div>
          <ul className="processors d-flex list-none flex-wrap">
            <li>
              <div className="processor">
                <h2>Level 1</h2>
                <h3>Bronze</h3>
                <p>
                  Starting at $ 952 <br /> or just $43.93/monthly <br />
                  <a href="#">Details</a>
                </p>
                <p>Specifications</p>
                <ul className="list-none">
                  <li>i3-12100F (4 Core)</li>
                  <li> GTX 1650 4GB </li>
                  <li>16GB DDR4 Memory</li>
                  <li> 500GB M.2 SSD </li>
                  <li> Windows 11 </li>
                  <li>Standard 5 Year Warranty</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="processor">
                <h2>Level 2</h2>
                <h3>Silver</h3>
                <p>
                  Starting at $ 952 <br /> or just $43.93/monthly <br />
                  <a href="#">Details</a>
                </p>
                <p>Specifications</p>
                <ul className="list-none">
                  <li>i3-12100F (4 Core)</li>
                  <li> GTX 1650 4GB </li>
                  <li>16GB DDR4 Memory</li>
                  <li> 500GB M.2 SSD </li>
                  <li> Windows 11 </li>
                  <li>Standard 5 Year Warranty</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="processor">
                <h2>Level 3</h2>
                <h3>Gold</h3>
                <p>
                  Starting at $ 952 <br /> or just $43.93/monthly <br />
                  <a href="#">Details</a>
                </p>
                <p>Specifications</p>
                <ul className="list-none">
                  <li>i3-12100F (4 Core)</li>
                  <li> GTX 1650 4GB </li>
                  <li>16GB DDR4 Memory</li>
                  <li> 500GB M.2 SSD </li>
                  <li> Windows 11 </li>
                  <li>Standard 5 Year Warranty</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="processor">
                <h2>Level 4</h2>
                <h3>Platinum</h3>
                <p>
                  Starting at $ 952 <br /> or just $43.93/monthly <br />
                  <a href="#">Details</a>
                </p>
                <p>Specifications</p>
                <ul className="list-none">
                  <li>i3-12100F (4 Core)</li>
                  <li> GTX 1650 4GB </li>
                  <li>16GB DDR4 Memory</li>
                  <li> 500GB M.2 SSD </li>
                  <li> Windows 11 </li>
                  <li>Standard 5 Year Warranty</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Forge_Model
