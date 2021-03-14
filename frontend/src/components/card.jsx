import React ,{ useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/card.css"
import axios from "axios" 

const Cards = ()=>{
  const[response,setResponse] = useState('')
  useEffect(()=>{
    axios.get("http://localhost:5000/bike")
    .then(res=>setResponse(res.data))
    .catch(err=>console.log(err))
})
    return(
        <div className="arrange">
       <Container>
  <Row>
    <Col size>
    <Card  style={{ width:'30rem',height:'30rem' }}>
    <Card.Body>
    <Card.Title className="increase-title" >Bike</Card.Title>
    <Card.Text className="increase-body">
      Total distace: {response.total_distance} <br/>
      Total fuelcost: {response.fuel_cost} <br/>
      Carbon emissions:{response.carbon_emissions} <br/>
    </Card.Text>
    </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card  bg="success" style={{ width: '30rem',height:'30rem' }}>
    <Card.Body>
    <Card.Title  className="increase-title" >EV Car</Card.Title>
    <Card.Text className="increase-body">
      Electricity Cost: {response.evcar_charge}<br/>
      Carbon Emisssions: {response.evcar_carbon_emissions_usage} <br/>
      Manufaturing carbon emissions: {response.evcar_carbon_emission_production} <br/>
    </Card.Text  >
    </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card bg="success" style={{ width: '30rem',height:'30rem' }}>
    <Card.Body>
    <Card.Title  className="increase-title" >EV Bike</Card.Title>
    <Card.Text  className="increase-body">
    Electricity Cost: {response.evbike_charge} <br/>
    Carbon Emisssions: {response.evbike_carbon_emissions} <br/>
    Manufaturing carbon emissions: {response.evbike_carbon_emission_production} <br/>
    </Card.Text>
    </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width:'30rem',height:'30rem'}}>
    <Card.Body>
    <Card.Title  className="increase-title" >BMTC</Card.Title>
    <Card.Text className="increase-body">
      Bmtc cost: {response.BMTC_charge} <br/>
      Carbon emission : {response.BMTC_carbon_emissions}
    </Card.Text>
    </Card.Body>
    </Card>
    </Col>
  </Row>
</Container>
    </div>
    )
}

export default Cards