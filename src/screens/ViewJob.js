import React from 'react'
import Header from '../components/Header'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function ViewJob() {
  const [media,setMedia] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:4000/jobs/individual?postedBy=6446c690d16f51972f9b563d`)
   .then(({data})=>{
   setMedia(data.results)
   })
},[])

  return (
    <div>
<Header/>

<Container>
  <Row>
 {Array.isArray(media)
 ? media.map(data=>{
  return(
    <div class="card" style={{width:"18rem"}}>
    <div class="card-body">
      <h5 class="card-title">{data.jobTitle}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Salary: {data.salary}</h6>
      <p class="card-text">Description: {data.jobDescription}</p>
      <h6 class="card-subtitle mb-2 text-muted">HighestQualification: {data.highestQualification}</h6>
      <LinkContainer to={"/updateJob"}>
      <a href='/' class="card-link">Update</a>
      </LinkContainer>
    </div>
  </div>
  )
 }): null}
</Row>
</Container>
    </div>
  )
}

export default ViewJob