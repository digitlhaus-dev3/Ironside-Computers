import React from 'react'
import styles from './styles.module.css'

const BlockQuote = ({quoteBody,quoteHeading,alignQuote}) => {
  alignQuote = 'align-right';
  if(alignQuote.toLowerCase() === 'left'){
    alignQuote = 'align-left';
  }
  return (
    <>
    <div className='alignQuote'>
      <div className='block-quote'>
        <h2 className='text-shadow'>{quoteHeading}</h2>
        <p>{quoteBody}</p>
      </div>
      </div>
    </>
  )
}

export default BlockQuote
