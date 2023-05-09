import React, { useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

function JobUpdateModal(props) {
  const { show, onHide, onUpdate, upUserId, username, firstName, lastName, email, phone, highestQualification, courseStudied, batchDetails, placementStatus, companyName, userType } = props;
  const [username2, usernname2] = useState(userName);
  const [firstName2, firstName2] = useState(companyName);
  const [lastName2, lastName2] = useState(location);
  const [email2, email2] = useState(email);
  const [phone2, phone2] = useState(salary);
  const [highestQualification2, setHighestQualification2] = useState(highestQualification);
  const [courseStudied2, courseStudied2] = useState(location);
  const [batchDetails2, batchDetails2] = useState(location);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobData = {
      jobTitle: jobTitle2,
      companyName: companyName2,
      jobDescription: jobDescription2,
      salary: salary2,
      location: location2,
      highestQualification:highestQualification2,
      updatedAt: new Date().toISOString()
    };

    fetch(`http://localhost:4000/user/${upUserId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      onUpdate(data);
      onHide();
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  }
    
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Job Listing</Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-4'>
        <Form onSubmit={handleSubmit}>
            <Row>
            <Col md={6}>
          <Form.Group className='p-2'>
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" value={username} onChange={(e) => setJobTitle2(e.target.value)} style={{ border: '2px solid #ced4da' }} />
          </Form.Group>
        </Col>

            </Row>
        <Row>
        <Col md={6}>
          <Form.Group className='p-2'>
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" value={firstName} onChange={(e) => setJobTitle2(e.target.value)} style={{ border: '2px solid #ced4da' }} />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='p-2'>
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" value={lastName} onChange={(e) => setCompanyName2(e.target.value)} style={{ border: '2px solid #ced4da' }} />
          </Form.Group>
        </Col>
      </Row>
          <Form.Group className='p-2'>
            <Form.Label>Job Description</Form.Label>
            <Form.Control as="textarea" value={email} onChange={(e) => setJobDescription2(e.target.value)} style={{ border: '2px solid #ced4da' }} />
          </Form.Group>
          <Row>
        <Col md={6}>
          <Form.Group className='p-2'>
            <Form.Label>Salary</Form.Label>
            <Form.Control type="number" value={phone} onChange={(e) => setSalary2(e.target.value)} style={{ border: '2px solid #ced4da' }} />
          </Form.Group>
          </Col>
          <Col md={6}>
          <Form.Group className='p-2'>
          <Form.Label>Highest Qualification</Form.Label>

              <select name=""  className='form-select'
                  value={highestQualification2}
                  onChange={(e)=>setHighestQualification2(e.target.value)} style={{ border: '2px solid #ced4da' }}
                >
              <option selected disabled hidden > HIGHEST QUALIFICATION</option>
              <option >Select One</option>
                <option >High School</option>
                <option >Diploma</option>
                <option>Bachelor</option>
                <option>Master</option>
                <option>PhD</option>
            
              </select>
              </Form.Group>

          </Col>
          </Row>
          <Form.Group className='p-2'>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" value={location2} onChange={(e) => setLocation2(e.target.value)} style={{ border: '2px solid #ced4da' }} />
          </Form.Group>

          <Modal.Footer>

          <Button type="submit" variant="danger" onClick={onHide}>Update Job</Button>
          <Button type="submit" onClick={onHide}>Cancel</Button>
          </Modal.Footer>

        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default JobUpdateModal;