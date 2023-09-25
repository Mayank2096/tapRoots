import React from "react";
import {Container,Row, Col} from "react-bootstrap";

const currentYear= new Date().getFullYear();
function footer(){
    return(
        <footer >
            <Row>
                <Col  >
                <p style={{textAlign: "center"}}> TapRoots &copy; {currentYear} </p>
                </Col>
            </Row>
        </footer>
    )
}
export default footer ;