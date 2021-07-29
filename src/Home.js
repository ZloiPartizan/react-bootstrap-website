import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Slider from "./Components/Slider";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import Jumbotron from './Components/Jumbotron';
import Onecar from './onecar.png';
import Onecar3 from './onecar3.png';

export const Home = () =>(
    <>
    <Slider/>

    <Container  style={{paddingTop: '5rem'}}>
        <Row>
            <Col className = "col-sm-4">
                <Card>
                    <Card.Img variant="top" src={Onecar}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                The Best car in the word. Have black color. Fast speed
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                </Card>
            </Col>
            <Col className = "col-sm-4">
                <Card>
                    <Card.Img variant="top" src={Onecar}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            The Best car in the word. Have black color. Fast speed
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col className = "col-sm-4">
                <Card>
                    <Card.Img variant="top" src={Onecar3}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            The Best car in the word. Have black color. Fast speed
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    </Container>

    <Jumbotron/>
    </>

)