import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import Header from '../components/Header';
import Footer from '../components/Footer';

const JobScreen = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data.jobs))
      .catch((error) => console.log(error));
  }, []);
    return (
    <>
      <Header />
      <Container>
        <div>
          <br></br>
          <h2 className="text-center">All Available Jobs Postings</h2>
          <br></br>
        </div>
        <Row>
          {Array.isArray(jobs) && jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard
                key={job._id}
                jobTitle={job.jobTitle}
                companyName={job.companyName}
                jobDescription={job.jobDescription}
                salary={job.salary}
                location={job.location}
                highestQualification={job.highestQualification}
                postedBy={job.postedBy}
                createdAt={job.createdAt}
                updatedAt={job.updatedAt}
              />
            ))
          ) : (
            <p>No jobs available.</p>
          )}
        </Row>
      </Container>

      <Footer/>
    </>
  );
};

export default JobScreen;
