import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import '../components/AlumniJobCard.css';

function JobCard(props) {
  const { jobTitle, companyName, jobDescription, salary, location, highestQualification, createdAt, updatedAt } = props;
  const [hovered, setHovered] = useState(false);

  return(
    <Col xs={12} md={6} lg={6} xl={4} xxl={3}>
      <div style={{ padding: '10px' }}>
        <Card
        style={{ border: '3px dashed rgba(44, 41, 41, 0.400'}}
          // style={{ width: '100%' }}
          className={hovered ? 'job-card hovered' : 'job-card'}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          
          <Card.Body className='jobCard'>
            <Card.Title className='text-primary text-center'>{jobTitle}</Card.Title>
            <br></br>
            <Card.Text className="mb-2">Company: {companyName}</Card.Text>

            <Card.Text className="mb-2">Qualification: {highestQualification}</Card.Text>
            <Card.Text className="mb-2">Job Location: {location}</Card.Text>
            <Card.Text>Salary: {salary}/- INR</Card.Text>
            <Card.Text>Description:<br></br>{jobDescription}</Card.Text>
            <Card.Text className="smalltext text-muted">Job listing created at: {createdAt}</Card.Text>
            <Card.Text className="smalltext text-muted">Job listing updated at: {updatedAt}</Card.Text>

            <Button variant="dark"  block href="#">Apply Now</Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  )
}

export default JobCard;
