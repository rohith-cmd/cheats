import React from "react"
import Navbar from "../components/navbar"
import Logo from "../components/logo"
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from "react-bootstrap/Dropdown" 
import Button from "react-bootstrap/Button"
import "../styles/select.css"
import {Link} from "react-router-dom"

const Select = ()=>{
    return(
        <div>
            <Logo/>
            <Navbar/>
            <div className="choose">
            <h1 className="header">Choose your Ride</h1>
            </div>
        <div className="container">
        <Container>
        <Row>
        <Col xs="3">
        <Link to={{
            pathname:"/bike"
        }}>
        <Button  size="lg" variant="outline-success">Bike</Button>
        </Link>
        </Col>
        <Col xs="3">
        <Dropdown>
    <Dropdown.Toggle size="lg" variant="success" id="dropdown-basic">
        Car
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Small Petrol</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Medium Petrol</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Large Petrol</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Average Petrol</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Small Diesel</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Large Diesel</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Average Diesel</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
        </Col>
        <Col xs="3">
        <Dropdown>
    <Dropdown.Toggle size="lg" variant="success" id="dropdown-basic">
    EV
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Electic car</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Electric Bike </Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </Col>
     <Col xs="3">
     <Button  size="lg" variant="outline-success">Bus</Button>
        </Col>
      </Row>
        </Container>
        </div>
        </div>
    )
}
export default Select