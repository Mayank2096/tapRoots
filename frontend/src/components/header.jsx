import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import {LinkContainer} from 'react-router-bootstrap';

function Header(){
    return (
        <header>
                <Navbar bg="dark" data-bs-theme="dark" expand="md" variant="light">
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={logo} style={{width:50, height:50, borderRadius: "50%"}} />
                    TapRoots
                    </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <div>
                        <Nav className="me-auto">
                            <LinkContainer to="/cart">
                            <Nav.Link ><FaShoppingCart/>Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/user">
                            <Nav.Link ><FaUser/>Login</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </div>
                    </Navbar.Collapse>
                    <div className="header-form">
                        <Form inline>
                            <Row>
                            <Col xs="auto">
                                <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit" variant="outline-light" >Submit</Button>
                            </Col>
                            </Row>
                    </Form>
                    </div>
                </Container>
                </Navbar>
        </header>
    )
}

export default Header;