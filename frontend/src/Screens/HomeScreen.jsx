import React from "react";
import {Row,Col} from  "react-bootstrap";
import products from "../products";
import Card from 'react-bootstrap/Card';


function ProductCard(product){
    return (
        <Card style={{ width: '18rem' , padding: "20px" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                {product.price}
            </Card.Text>
            </Card.Body>
      </Card>
    )
}
function HomeScreen(){
    return(
       <div>
        <h1> Latest Products</h1>
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