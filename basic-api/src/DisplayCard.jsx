/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Card, CardBody, CardTitle, CardText } from "reactstrap"
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa"

const DisplayCard = ({ details }) => {
  return (
    <Card>
      <CardBody className='text-center'>
        <img height="150" width="150"
          className='rounded-circle img-thumbnail border-primary'
          src={details.picture?.large}
        />
        <CardTitle className='text-primary'>
          <h1>
            <span className='px-2'>{details.name?.title}</span>
            <span >{details.name?.first}</span>
            <span >{details.name?.last}</span>
          </h1>
        </CardTitle>
        <FaMapMarkedAlt />
        {details.location?.city}
        <p>{details.phone}</p>

      </CardBody>
    </Card>
  )
}

export default DisplayCard