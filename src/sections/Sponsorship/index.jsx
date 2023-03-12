import React, { useState } from 'react'
import Input from 'Components/Input'
import Slider from 'react-slick'
import Image from 'Components/Image'

const Sponsorship = (image) => {
  const [onFieldChange, setOnFieldChange] = useState({
    firstName: '',
    lastName: '',
    link: '',
    number: '',
    sponsored: '',
    requirement: '',
  })
  const settings = {
    arrow: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    rows: 2,
    autoplay: true,
    autoplayspeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 666,
        settings: 'unslick',
      },
    ],
  }
  const saveChanges = () => {
    console.log(onFieldChange)
  }
  return (
    <div>
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
          <h3>Links to Social Media</h3>
          <Input
            onChange={event =>
              setOnFieldChange(previousData => ({
                ...previousData,
                link: event.target.value,
              }))
            }
          />
          <h3>Number of followers </h3>
          <Input
            onChange={event =>
              setOnFieldChange(previousData => ({
                ...previousData,
                number: event.target.value,
              }))
            }
          />
          <h3>Why would you like to be sponsored by Ironside?</h3>
          <Input
            onChange={event =>
              setOnFieldChange(previousData => ({
                ...previousData,
                sponsored: event.target.value,
              }))
            }
          />
          <h3>Do you meet the minimum requirements?</h3>
          <label>
            <input
              type="radio"
              value="yes"
              onChange={event =>
                setOnFieldChange(previousData => ({
                  ...previousData,
                  requirement: event.target.value,
                }))
              }
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              onChange={event =>
                setOnFieldChange(previousData => ({
                  ...previousData,
                  requirement: event.target.value,
                }))
              }
            />
            No
          </label>
          <button onClick={saveChanges}>Apply</button>
        </div>
      </div>
      <div>
        <h3>Our Current Shonsorships</h3>
        <div className="container-2">
          <div className="photoGallery" id="gallery">
            <Slider {...settings}>
              {image?.productImages.map(event => {
                return (
                  <div className="galleryImage">
                    <Image
                      key={event.id}
                      src={event?.productImage?.src}
                      altext={event?.productImage?.alt}
                    ></Image>
                    <p>{event?.productImage?.alt}</p>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsorship
