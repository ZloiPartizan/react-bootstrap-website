import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Slider from "./Components/Slider";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import Onecar from './onecar.png';
import Onecar2 from './onecar2.png';
import Onecar3 from './onecar3.png';

export const Home = () =>(
    <>
    <Slider/>
    <Container style={{paddingTop: '2rem', paddingBottom: '2rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
        <Row>
            <Col>
                <Card style={{width: '18rem', height: '24rem'}}>
                    <Card.Img variant="top" src={Onecar}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                The Best car in the word. Have black color. Fast speed
                            </Card.Text>
                            <Button variant="secondary">Learn more</Button>
                        </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem', height: '24rem'}}>
                    <Card.Img variant="top" src={Onecar}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            The Best car in the word. Have black color. Fast speed
                        </Card.Text>
                        <Button variant="secondary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem', height: '24rem'}}>
                    <Card.Img variant="top" src={Onecar3}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            The Best car in the word. Have black color. Fast speed
                        </Card.Text>
                        <Button variant="secondary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </>

)