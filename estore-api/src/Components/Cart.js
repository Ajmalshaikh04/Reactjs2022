import React from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row
} from "reactstrap"

const Cart = ({cartItem,removeItem,buyNow}) => {
    let amount=0;

    cartItem.forEach(item => {
        amount=parseFloat((amount) )+ parseFloat((item.productPrice))
    });
  return (
    <Container fluid>
        <h1 className='text-success'>Your Cart</h1>
        <ListGroup>
            {cartItem.map(itm=>(
                <ListGroupItem key={itm.id}>
                    <Row>
                        <Col>
                        <img height={80} src={itm.tinyImage}/>
                        </Col>
                        <Col className='text-center'><div className='text-primary'>{itm.productName}</div><span>price: ₹ {itm.productPrice}</span> <Button color='danger' onClick={()=>removeItem(itm)}>Remove</Button></Col>
                    </Row>
                </ListGroupItem>
            ))}
        </ListGroup>
        {/* if everything is empty */}
        {
            cartItem.length >= 1 ? 
            (<Card>
                <CardHeader> Grand Total</CardHeader>
                <CardBody> Your amount for {cartItem.length} product is {amount}</CardBody>
                <CardFooter>
                    <Button color='success' onClick={buyNow}>Buy Now </Button>
                </CardFooter>
            </Card>) : (<h1 className='text-warning'>Cart Is Empty</h1>)
        }
    </Container>
  )
}

export default Cart