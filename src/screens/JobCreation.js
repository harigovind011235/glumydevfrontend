import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const JobCreation = () => {
  return (
    <div>
        <Header/>

        <Container className="d-flex justify-content-center mt-4">
        <Row>
          <Col>
            <h1 className="text-center my-4">JobCreation</h1>
            <Form>
              <Form.Group className='p-2' >
                <Form.Control
                  type="text"
                  placeholder="COMPANY NAME"
                />
              </Form.Group>

              <Form.Group className='p-2'>
                <Form.Control
                  type="text"
                  placeholder="JOB TITLE"
                />
              </Form.Group>

              <Form.Group className='p-2'>
                <Form.Control
                  type="text"
                  placeholder="JOB DESCRIPTION"
                />
              </Form.Group>

              <Form.Group className='p-2'>
              <select name=""  className='form-select'>
              <option selected disabled hidden > HIGHEST QUALIFICATION</option>
                <option >BCA</option>
                <option >MCA</option>
                <option>BSC</option>
                <option>MSC</option>
                <option>Bcom</option>
                <option>Mcom</option>
                <option>BBA</option>
                <option>MBA</option>
                <option>BTECH</option>
                <option>MTECH</option>
                <option>BA</option>
                <option>MSC</option>
                <option>MA</option>
              </select>
              </Form.Group>

              <Form.Group className='p-2'>
                <Form.Control
                  type="text"
                  placeholder="SALARY"
                />
              </Form.Group>

              <Form.Group className='p-2'>
                <Form.Control
                  type="text"
                  placeholder="LOCATION"
                />
              </Form.Group>

              <Form.Group className='p-2'>
                <Form.Control
                  type="text"
                  placeholder="CONTACT INFO"
                />
              </Form.Group>

              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "14vh" }}
              >
                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>


        <Footer/>
    </div>
  )
}

export default JobCreation