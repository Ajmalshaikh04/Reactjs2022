import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import Axios from 'axios';
import DisplayCard from './DisplayCard';



const App = () => {
  const [details, setDetails] = useState({})
  const fetchDetails = async () => {
    // const response=await Axios.get("https://randomuser.me/api/");

    //destructuring given responce directly
    const { data } = await Axios.get("https://randomuser.me/api/");
    // console.log("Responce:",response);
    // console.log(data);

    const details = data.results[0]

    setDetails(details)
  }
  useEffect(() => {
    fetchDetails()
  }, [])

  return (
    <Container fluid className='p-4 bg-dark App'>
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <DisplayCard details={details} />
        </Col>
      </Row>
    </Container>
  )
}

export default App