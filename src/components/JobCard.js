import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';

function JobCard(props) {
  const { jobTitle, companyName, jobDescription, salary, location, highestQualification } = props;

  return(
    <Col xs={12} md={6} lg={4} xl={3}>
      <div style={{ padding: '10px' }}>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>{jobTitle}</Card.Title>
            <br></br>
            <Card.Text className="mb-2 text-muted">Job Category: {highestQualification}</Card.Text>
            <Card.Text className="mb-2 text-muted">Job Location: {location}</Card.Text>
            <Card.Text>{jobDescription}</Card.Text>
            <Card.Text>Salary: {salary}</Card.Text>
            <Button variant="dark" size="sm" block href="#">Apply Now</Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  )
}

export default JobCard;
