import React from 'react'
import Image from 'Components/Image'
import { CloseIcon } from '@chakra-ui/icons'

const Forge_Model = ({ category }) => {
 
  return (
    <div>
      {category.selected === 'IntelCore' && (
        <div>
          <h3>INTEL</h3>
          <div>
            <div>
              <Image src="" />
            </div>
            <div>
              <CloseIcon
                onClick={() => {
                  window.location.reload()
                }}
              ></CloseIcon>
            </div>
            <div>
              <h3>Bronze</h3>
              <p>
                Starting at $ 952 <br /> or just $43.93/monthly <br />
                <a href="#">Details</a>
              </p>
              <p>Specifications</p>
              <ul>
                <li>i3-12100F (4 Core)</li>
                <li> GTX 1650 4GB </li>
                <li>16GB DDR4 Memory</li>
                <li> 500GB M.2 SSD </li>
                <li> Windows 11 </li>
                <li>Standard 5 Year Warranty</li>
              </ul>
            </div>
            <div>
              <h3>Silver</h3>
              <p>
                Starting at $ 952 <br /> or just $43.93/monthly <br />
                <a href="#">Details</a>
              </p>
              <p>Specifications</p>
              <ul>
                <li>i3-12100F (4 Core)</li>
                <li> GTX 1650 4GB </li>
                <li>16GB DDR4 Memory</li>
                <li> 500GB M.2 SSD </li>
                <li> Windows 11 </li>
                <li>Standard 5 Year Warranty</li>
              </ul>
            </div>
            <div>
              <h3>Gold</h3>
              <p>
                Starting at $ 952 <br /> or just $43.93/monthly <br />
                <a href="#">Details</a>
              </p>
              <p>Specifications</p>
              <ul>
                <li>i3-12100F (4 Core)</li>
                <li> GTX 1650 4GB </li>
                <li>16GB DDR4 Memory</li>
                <li> 500GB M.2 SSD </li>
                <li> Windows 11 </li>
                <li>Standard 5 Year Warranty</li>
              </ul>
            </div>
            <div>
              <h3>Platinum</h3>
              <p>
                Starting at $ 952 <br /> or just $43.93/monthly <br />
                <a href="#">Details</a>
              </p>
              <p>Specifications</p>
              <ul>
                <li>i3-12100F (4 Core)</li>
                <li> GTX 1650 4GB </li>
                <li>16GB DDR4 Memory</li>
                <li> 500GB M.2 SSD </li>
                <li> Windows 11 </li>
                <li>Standard 5 Year Warranty</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Forge_Model
