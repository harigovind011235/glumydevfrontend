import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function JobCard() {
    return(
        <>
    <Col xs={12} md={6} lg={4} xl={3}>
         <div style={{ padding: '10px' }}>
        <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>Job Name</Card.Title>
        <br></br>
        <Card.Text className="mb-2 text-muted">Job Category :</Card.Text>
        <Card.Text className="mb-2 text-muted">Job Location :</Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Row>
            <Col xs={6} sm={6}>
              <Button variant="dark" size="sm" block href="#">Update</Button>
            </Col>
            <Col xs={6} sm={6}>
              <Button variant="outline-danger" size="sm" block href="#">Delete</Button>
            </Col>
          </Row>
      </Card.Body>
    </Card>
    </div>
    </Col>

    </>
    )
}

export default JobCard