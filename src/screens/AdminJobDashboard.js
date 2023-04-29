import React from "react";
import AdminJobCard from "../components/AdminJobCard";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
// import Col from 'react-bootstrap/Col';
import Header from '../components/Header'


const AdminJobsDashboard = () => {
    return(
        <>
        <Header/>
        <Container>
            <br></br>
            <h2 className="text-center">Admin Dashboard: Manage Job Postings</h2>
            <br></br>
    <Row>
        <AdminJobCard/>
        <AdminJobCard/>
        <AdminJobCard/>
        <AdminJobCard/>
        <AdminJobCard/>
        <AdminJobCard/>
        <AdminJobCard/>
        <AdminJobCard/>
    </Row>
      </Container>
      </>
    )
}
export default AdminJobsDashboard