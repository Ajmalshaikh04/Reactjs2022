import React ,{useState,useEffect}from 'react'
import Axios from "axios"
import {faker} from "@faker-js/faker"
import { Container,Col,Row}from "reactstrap"
import CartItem from './CartItem'

// const randomName = faker.name.findName();
// console.log(randomName);

const apiKey="INSERT_YOUR_API_KEY"

const url="https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"

const localUrl="https://myjson.dit.upm.es/api/bins/iyve"

const BuyPage = ({addInCart}) => {

    const [product,setProduct]=useState([])

    // const fetchPhotos=async()=>{
    //     const response=await Axios.get(url,{
    //         header:{
    //             Authorization: apiKey
    //         }
    //     })
    // }


    const fetchPhotos=async()=>{
        const { data }=await Axios.get(localUrl);
        const {photos}=data;
    

    const allProducts= photos.map(photo=>(
        {
            smallImage:photo.src.medium,
            tinyImage:photo.src.tiny,
            productName:faker.lorem.word(),
            productPrice:faker.commerce.price(),
            id:faker.datatype.uuid()
        }
    ))

    setProduct(allProducts)
    };
    

    useEffect(()=>{
        fetchPhotos();
    },[])

  return (
    <Container fluid>
        <h1 className='text-success text-center'>
            Buy Page
        </h1>
        <Row>
            {product.map(p=>(
                <Col md={4} key={p.id}>
                    <CartItem p={p} addInCart={addInCart}/>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default BuyPage