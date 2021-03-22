import React,{ useState, useEffect} from "react"
import Card from "react-bootstrap/Card"
import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../components/logo"
import Navbar from "../components/navbar"
import "../styles/bike.css"
import axios from "axios" 
import Spinner from "react-bootstrap/Spinner"


const Bike = (props)=>{
     const[response,setResponse] = useState('')
  useEffect(()=>{
    axios.get("https://asia-south1-electrek-308100.cloudfunctions.net/app/bike")
    .then(res=>setResponse(res.data))
    .catch(err=>console.log(err))
},[])
    return(
       <div>
        <Logo/>
        <Navbar/>
        {(!response)?<Spinner/>:null}
        <div className="arrange">
       <Container>
        <Row>
        <Col>
        <Card  style={{ width:'30rem',height:'30rem' }}>
        <Card.Body>
        <Card.Title className="increase-title" >Bike</Card.Title>
        <Card.Text className="increase-body">
        Total distace: {response.total_distance} <br/>
        Total fuelcost: {response.fuel_cost} <br/>
        Carbon emissions: {response.carbon_emissions} <br/>
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card  bg="success" style={{ width: '30rem',height:'30rem' }}>
        <Card.Body>
        <Card.Title  className="increase-title success" >EV Car</Card.Title>
        <Card.Text className="increase-body success">
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
        <Card.Title  className="increase-title success" >EV Bike</Card.Title>
        <Card.Text  className="increase-body success">
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
</div>
    )
}
export default Bike