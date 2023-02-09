import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

const BlockQuote = ({ quoteBody, quoteHeading, alignQuote }) => {
  const [blockShadow, setBlockShadow] = useState('')
  useEffect(() => {
    if (alignQuote?.toLowerCase() === 'left') {
      alignQuote = 'align-left'
      setBlockShadow('block-quote-shadow')
    } else {
      alignQuote = 'align-right'
      setBlockShadow('boxess')
    }
  }, [alignQuote])

  return (
    <>
      <div className="container boxes">
        <div className={blockShadow}>
          <div className="block-quote">
            <div className={alignQuote}>
              <h2 className="text-shadow">{quoteHeading}</h2>
              <p>{quoteBody}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlockQuote
