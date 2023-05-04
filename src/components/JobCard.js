import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import '../components/jobcard.css';

function JobCard(props) {
  const { jobTitle, companyName, jobDescription, salary, location, highestQualification , postedBy, createdAt, updatedAt } = props;
  const [hovered, setHovered] = useState(false);

  return(
    <Col xs={12} md={6} lg={6} xl={4}>
      <div style={{ padding: '10px' }}>
        <Card
          // style={{ width: '100%' }}
          className={hovered ? 'job-card hovered' : 'job-card'}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Card.Body className='jobCard'>
            <Card.Title>{jobTitle}</Card.Title>
            <br></br>
            <Card.Text className="mb-2 text-muted">Company: {companyName}</Card.Text>

            <Card.Text className="mb-2 text-muted">Job Category: {highestQualification}</Card.Text>
            <Card.Text className="mb-2 text-muted">Job Location: {location}</Card.Text>
            <Card.Text>Description:<br></br>{jobDescription}</Card.Text>
            <Card.Text>Salary: {salary}</Card.Text>
            <Card.Text>Posted By: {postedBy}</Card.Text>
            <Card.Text>Job listing created at: {createdAt}</Card.Text>
            <Card.Text>Job listing updated at: {updatedAt}</Card.Text>

            <Button variant="dark" size="sm" block href="#">Apply Now</Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  )
}

export default JobCard;
