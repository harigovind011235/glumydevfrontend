import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { LinkContainer } from "react-router-bootstrap";

const ViewJob = () => {
  return (
    <div>

        <Header/>




    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>jobTitle</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">jobDescription</Card.Subtitle>
        <Card.Text> salary</Card.Text>
        <Card.Text> highestQualification</Card.Text>
        <Card.Link >delete</Card.Link>
        <LinkContainer to={"/updateJob"} >
        <Card.Link >update</Card.Link>
        </LinkContainer>
      </Card.Body>
    </Card>





    </div>
  )
}

export default ViewJob