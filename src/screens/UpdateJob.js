import React, { useEffect } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const UpdateJob = () => {
  const navigate  = useNavigate();
  const [companyName,setCompanyName]=useState("")
  const [jobTitle,setJobTitle]=useState("")
  const [jobDescription,setJobDescription]=useState("")
  const [highestQualification,setHighestQualification]=useState("qualification")
  const [salary,setSalary]=useState("")
  const [location,setLocation]=useState("")
  const [ID,setID] = useState(null)

  const sendDataToApi= () =>{
    const jobData={
      "companyName":companyName,
      "jobTitle":jobTitle,
      "jobDescription":jobDescription,
      "highestQualification":highestQualification,
      "salary":salary,
      "location":location
    }
    axios.put(`http://localhost:4000/jobs/${ID}`,jobData)
    .then((response)=>{
      if(response.data.status===true){
        alert("Updated successfully");
        navigate('/home');
      } else{
        alert("Update Failed");
      }
    })
  }

  useEffect(()=>{
    setCompanyName(localStorage.getItem("companyName"));
    setJobTitle(localStorage.getItem("jobTitle"))
    setJobDescription(localStorage.getItem("jobDescription"))
    setHighestQualification(localStorage.getItem("highestQualification"))
    setSalary(localStorage.getItem("salary"))
    setLocation(localStorage.getItem("location"))
  },[])

  return (
    <div>
<Header/>

<Container className="d-flex justify-content-center mt-4">
        <Row>
          <Col>
            <h1 className="text-center my-4">Update job</h1>
            <Form>
              <Form.Group className='p-2' >
                <Form.Control
                  type="text"
                  placeholder="COMPANY NAME"
                 value={companyName}
                 onChange={(e)=>setCompanyName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='p-2'>
                <Form.Control
                  type="text"
                  placeholder="JOB TITLE"
                  value={jobTitle}
                  onChange={(e)=>setJobTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='p-2'>
                <Form.Control
                  type="text"
                  placeholder="JOB DESCRIPTION"
                  value={jobDescription}
                  onChange={(e)=>setJobDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='p-2'>
              <select name=""  className='form-select'
                  value={highestQualification}
                  onChange={(e)=>highestQualification(e.target.value)}
                >
              <option selected disabled hidden > HIGHEST QUALIFICATION</option>
                <option >High School</option>
                <option >Diploma</option>
                <option>Bachelor</option>
                <option>Master</option>
                <option>PhD</option>

              </select>
              </Form.Group>

              <Form.Group className='p-2'>
                <Form.Control
                  type="text"
                  placeholder="SALARY"
                  value={salary}
                  onChange={(e)=>setSalary(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='p-2'>
                <Form.Control
                  type="text"
                  placeholder="LOCATION"
                  value={location}
                  onChange={(e)=>setLocation(e.target.value)}
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
                    onClick={sendDataToApi}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UpdateJob