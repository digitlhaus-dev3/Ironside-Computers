import React from 'react'
import styles from './styles.module.css'

const BlockQuote = ({quoteBody,quoteHeading,alignQuote}) => {
  if(alignQuote?.toLowerCase() === 'left'){
    alignQuote = 'align-left';
  }else{
  alignQuote = 'align-right';
  }
  
   return (
    <>
      <div className='block-quote'>
        <div className={alignQuote}>
          <h2 className='text-shadow'>{quoteHeading}</h2>
          <p>{quoteBody}</p>
        </div>
      </div>
    </>
  )
}

export default BlockQuote
