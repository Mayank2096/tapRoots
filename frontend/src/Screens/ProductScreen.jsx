import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Rating from "../components/rating";
import products from "../products";


function ProductScreen(){

    const {id:ProductId} =useParams();
    const product= products.find(function(p){
        return (p._id ===ProductId);
    })
    const Availability= (product.countInStock >0 ? "In Stock":"Out of Stock")

    return (
        <div>
            <Link className='btn btn-light my-3' to='/'>Go Back </Link>
            <Container className="product-page" >
                <Row>
                    <Col md={5}>
                        <Image src={product.image} alt={product.name} thumbnail />
                    </Col>
                    <Col md={4}>
                        <ListGroup >
                            <ListGroup.Item>{product.name}</ListGroup.Item>
                            <ListGroup.Item>{product.description}</ListGroup.Item>
                        </ListGroup>
                        {product.countInStock >0 ? null :<h3 style={{color: "red", textAlign:"center"}}>Currently Unavailable </h3>}
                        <Button className="button-order" href="#" size="lg" variant="dark" style={{margin: 10 }} disabled={product.countInStock ==0}>Order Now</Button>
                        <Button className="button-order" href="#" size="lg" variant="dark" disabled={product.countInStock ==0}>Add to Cart</Button>
                    </Col>
                    <Col md={3}>
                        <Card>

                            <ListGroup>
                                <Row>
                                    <Col>
                                        <ListGroup.Item>Brand: {product.brand}</ListGroup.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <ListGroup.Item>Category: {product.category}</ListGroup.Item>
                                    </Col>
                                </Row>                                
                                <Row>
                                    <Col>
                                        <ListGroup.Item>Availability: {Availability} </ListGroup.Item>
                                    </Col>
                                </Row>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    )
};


export default ProductScreen;