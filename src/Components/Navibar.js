import React, {useState} from "react";
import {Navbar, Nav, Button, Container, NavDropdown, Modal, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div `
    a, .nav-link, .navbar-brand
    {
        color: #adb1b8;
        text-decoration: none;
        &:hover{
            color: white
        }
    }
    .navbar-brand
    {  
    font-size: 25px;
    line-height: 1.4em;
    font-weight: 600;
    }
`
export default function Navibar (){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <>
        <Styles>
        <Navbar className = "fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Button variant="secondary" className="m-sm-3" onClick={handleShow}>Log in</Button>
                        <Button variant="secondary"  className="m-sm-3" onClick={handleShow}>Sign out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Styles>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">We'll never share your email with</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" className="m-1"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </>
)}