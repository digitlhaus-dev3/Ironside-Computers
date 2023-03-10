import React from 'react'
import Container from 'Components/Container'
import Flex from 'Components/Flex'
import Button from 'Components/Button'
import Text from 'Components/Text'

const NotFound = () => {
  const reboot = () => {
    console.log('NAvigated to home page')
  }
  return (
    <div className="box-form absolute-heading error-page">
      <h1 className="account-heading">404</h1>
      <div className="bg-box">
        <div className="bg-box-head">
          <div className="flex dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="content">
          <div>
            <p>Seems the page you’re looking for isn’t here. (&gt;_&lt;)</p>
          </div>
          <Button className="btn" loadingText="Submitting" type="submit">
            Reboot
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
