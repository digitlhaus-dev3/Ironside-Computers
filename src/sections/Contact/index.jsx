import React, { useState } from 'react'
import Input from 'Components/Input'

const Contact = () => {
  const [onFieldChange, setOnFieldChange] = useState({
    firstName:'',
    lastName:'',
    email:'',
    number:'',
    order:'',
    help:''
  })
  const saveChanges = () => {
    console.log(onFieldChange)
  }
  return (
    <div>
      <div>
        <h3>Cutomer service</h3>
        <p>
          Phone: 1-512-696-1455 <br /> Phone Hours: Monday – Friday 9 a.m. – 4:30 p.m.
          <br /> CST Email: CustomerService@IronsideComputers.com
        </p>
        <h3>Technical Service</h3>
        <p>
          Phone: 1-512-696-1455 <br /> Phone Hours: Monday – Friday 9 a.m. – 4:30 p.m. CST
          <br /> Email: TechnicalSupport@IronsideComputers.com
        </p>
        <h3>Sponsorship Opportunities</h3>
        <p>
          For sponsorship inquiries please fill out our <br />
          <a link="#">Sponsorship Application.</a>
        </p>
        <h3>Location</h3>
        <p>
          Ironside Computers <br /> 2713 Meister Place Suite 200
          <br /> Round Rock, TX 78664
        </p>
      </div>
      <div>
        <h3>First Name</h3>
        <Input
          onChange={event =>
            setOnFieldChange(previousData => ({
              ...previousData,
              firstName: event.target.value,
            }))
          }
        />
        <h3>Last Name</h3>
        <Input
          onChange={event =>
            setOnFieldChange(previousData => ({
              ...previousData,
              lastName: event.target.value,
            }))
          }
        />
        <h3>Email Address</h3>
        <Input
          onChange={event =>
            setOnFieldChange(previousData => ({
              ...previousData,
              email: event.target.value,
            }))
          }
        />
        <h3>Phone Number</h3>
        <Input
          onChange={event =>
            setOnFieldChange(previousData => ({
              ...previousData,
              number: event.target.value,
            }))
          }
        />
        <h3>Order Number</h3>
        <Input
          onChange={event =>
            setOnFieldChange(previousData => ({
              ...previousData,
              order: event.target.value,
            }))
          }
        />
        <h3>How can we help you?</h3>
        <Input
          onChange={event =>
            setOnFieldChange(previousData => ({
              ...previousData,
              help: event.target.value,
            }))
          }
        />
        <button onClick={saveChanges}>Apply</button>
      </div>
    </div>
  )
}

export default Contact
