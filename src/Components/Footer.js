import React from "react";
import {Container} from "react-bootstrap";
import Jumbotron from "./Jumbotron";

const Footer = () => (
    <Container fluid style={{backgroundColor: '#212121', color: '#fff'}}>
        <Container style ={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
        <p>Land Rover</p>
        </Container>
    </Container>
)

export default Footer;