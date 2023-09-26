import React from "react";
import {Row,Col} from  "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../products";
import Card from 'react-bootstrap/Card';
import Rating from '../components/rating';

function ProductCard(product){
    return (
        <Card style={{ width: '18rem' , padding: "20px" }} className="card">
            <Link to={`/product/${product._id}`}>
                <Card.Img variant="top" src={product.image} />
            </Link>
            <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title>{product.name}</Card.Title>
            </Link>

            <Card.Text>
                    <Rating value={product.rating} text={` ${product.numReviews} reviews`}/>
            </Card.Text>
        
            <Card.Text className="product-price">
                    {`₹${product.price}`}
            </Card.Text>
            </Card.Body>
      </Card>
    )
}
function HomeScreen(){
    return(
       <div>
        <h1 className="headline"> Latest Products</h1>
        <Row>
            {
                products.map((product) => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                       {ProductCard(product)}
                    </Col>
                ))
            }
        </Row>
       </div>

    )
}

export default HomeScreen ;    