import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import Forge_Model_Main from '../Forge_Model_Main'
import { useStore } from 'frontend-store'

const Forge_Model = ({ category, product, intel1, intel2, amd1, amd2 }) => {
   const [categorySelected, setcategorySelected] = React.useState({
    selected: '',
  })
  const [Bronze, setBronze] = React.useState([])
  const [Silver, setSilver] = React.useState([])
  const [Gold, setGold] = React.useState([])
  const [Platinum, setPlatinum] = React.useState([])
  const [price, setPrice] = React.useState([])
  const [flag, setFlag] = React.useState(true)
  const [store,setStore] = useStore()
  let sorted = [];
  React.useEffect(() => {
    product?.products?.map(event => {
      const name = event.name.split('|')
      if (name[2].trim() === category?.selected) {
        if (name[1].trim() === 'Bronze') {
          console.log(event.price)
          setPrice(prev => [...prev, event.price])
          event?.modifiers?.map(e => {
            setBronze(prev => [...prev, e.optionValues[0].label])
          })
        } else if (name[1].trim() === 'Silver') {
          console.log(event.price)
          setPrice(prev => [...prev, event.price])
          event?.modifiers?.map(e => {
            setSilver(prev => [...prev, e.optionValues[0].label])
          })
        } else if (name[1].trim() === 'Gold') {
          console.log(event.price)
          setPrice(prev => [...prev, event.price])
          event?.modifiers?.map(e => {
            setGold(prev => [...prev, e.optionValues[0].label])
          })
        } else if (name[1].trim() === 'Platinum') {
          console.log(event.price)
          setPrice(prev => [...prev, event.price])
          event?.modifiers?.map(e => {
            setPlatinum(prev => [...prev, e.optionValues[0].label])
          })
        }
      }
    })
  }, [])
  sorted = price.sort((a, b) => a - b)
  const clickMe = (modelName,modelDescription) => { 
    console.log(modelName,modelDescription)
    setStore({name:modelName,desc:modelDescription})
    window.location.href = `/product-slider/?name=${modelName},desc=${modelDescription}`
  }
  return (
    <>
      {category?.selected === 'Intel' && (
        <div>
          {flag ? (
            <>
              <div className="d-flex justify-space-between">
                <h3>INTEL</h3>
                <button
                className='close'
                  onClick={() => {
                    setFlag(false)
                  }}
                ></button>
              </div>
              <ul className="processors d-flex list-none flex-wrap">
                <li>
                  <div className="processor">
                    <h2>Level 1</h2>
                    <h3>Bronze</h3>
                    <p>
                      Starting at $ {price[0]} <br /> or just $43.93/monthly <br />
                      <a href="#">Details</a>
                    </p>
                    <p>Specifications</p>
                    <ul className="list-none">
                      {Bronze?.map(event => {
                        return <li>{event}</li>
                      })}
                    </ul>
                    <a className='btn-2' onClick={()=>clickMe('level-1|Bronze|Intel',Bronze)}>Cutomize</a>
                  </div>
                </li>
                <li>
                  <div className="processor">
                    <h2>Level 2</h2>
                    <h3>Silver</h3>
                    <p>
                      Starting at $ {price[1]} <br /> or just $43.93/monthly <br />
                      <a href="#">Details</a>
                    </p>
                    <p>Specifications</p>
                    <ul className="list-none">
                      {Silver.map(event => {
                        return <li>{event}</li>
                      })}
                    </ul>
                    <a className='btn-2' onClick={()=>clickMe('level-1|Silver|Intel',Bronze)}>Cutomize</a>
                  </div>
                </li>
                <li>
                  <div className="processor">
                    <h2>Level 3</h2>
                    <h3>Gold</h3>
                    <p>
                      Starting at $ {price[2]} <br /> or just $43.93/monthly <br />
                      <a href="#">Details</a>
                    </p>
                    <p>Specifications</p>
                    <ul className="list-none">
                      {Gold.map(event => {
                        return <li>{event}</li>
                      })}
                    </ul>
                    <a className='btn-2' onClick={()=>clickMe('level-1|Gold|Intel',Bronze)}>Cutomize</a>
                  </div>
                </li>
                <li>
                  <div className="processor">
                    <h2>Level 4</h2>
                    <h3>Platinum</h3>
                    <p>
                      Starting at $ {price[3]} <br /> or just $43.93/monthly <br />
                      <a href="#">Details</a>
                    </p>
                    <p>Specifications</p>
                    <ul className="list-none">
                      {Platinum.map(event => {
                        return <li>{event}</li>
                      })}
                    </ul>
                    <a className='btn-2' onClick={()=>clickMe('level-1|Platinum|Intel',Bronze)}>Cutomize</a>
                  </div>
                </li>
              </ul>
            </>
          ) : (
            <Forge_Model_Main category={categorySelected} product={product} intel1={intel1} intel2={intel2} amd1={amd1} amd2={amd2} />
          )}
        </div>
      )}
    </>
  )
}

export default Forge_Model