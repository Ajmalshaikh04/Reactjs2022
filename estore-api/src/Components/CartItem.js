import React from 'react'

import {Card,CardImg,CardText,CardBody,CardTitle,Button} from "reactstrap"

const CartItem = ({p,addInCart}) => {
  return (
    <Card className='mt-2 mb-1'>
            <CardImg
            top
            height="250"
            width="100%"
            src={p.smallImage}
            />
            <CardBody className='text-center'>
                <CardTitle>{p.productName}</CardTitle>
                <CardText className='secondary'>Price: ₹ {p.productPrice}</CardText>
                <Button color='success'
                onClick={()=>addInCart(p)}>Buy Now</Button>
            </CardBody>
    </Card>
  )
}

export default CartItem