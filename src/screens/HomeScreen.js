import React from "react";
import Header from "../components/Header";
import JobSearch from "../components/JobSearch";
import HomeCard from "../components/HomeCard";
import Footer from '../components/Footer';
import { Col, Container, Row } from "react-bootstrap";

function HomeScreen() {
  return (
    <>
      <Header />
      <JobSearch />
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Featured Companies
      </h2>
      <Container>
        <Row style={{ marginTop: "40px" }}>
          <Col className="d-flex justify-content-center">
            <HomeCard
              title="Google"
              description="Google is a multinational technology company that specializes in Internet-related services and products."
            />
            <HomeCard
              title="Microsoft"
              description="Microsoft is an American multinational technology company that develops, licenses, and sells computer software, consumer electronics, and personal computers."
              />
            <HomeCard
              title="Amazon"
              description="Amazon is an American multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence."
              />
              
          </Col>
        </Row>
      </Container>
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Featured Jobs
      </h2>
      <Container>
        <Row style={{ marginTop: "40px" }}>
          <Col className="d-flex justify-content-center">
            <HomeCard
              title="Software Engineer"
              description="We're seeking a talented software engineer to join our team and help us build innovative software solutions. The ideal candidate should have experience with programming languages like Java, Python, or JavaScript."
            />
            <HomeCard
              title="Product Manager"
              description="We're looking for an experienced product manager to join our team and help us build amazing products that our customers love. The ideal candidate should have a strong understanding of customer needs, as well as experience with product development and management."
            />
            <HomeCard
              title="Data Scientist"
              description="We're seeking a data scientist to join our team and help us uncover insights from our data. The ideal candidate should have experience with statistical analysis, data visualization, and machine learning, as well as proficiency in Python or R."
            />
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "60px" }}>
        <Footer />
      </Container>
    </>
  );
}

export default HomeScreen;
