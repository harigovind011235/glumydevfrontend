import React, { useEffect, useState } from "react";
import JobCard from "../components/AdminJobCard";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const JobScreen = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data.jobs))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/jobs/${id}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        // Remove the deleted job from the state
        setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
        console.log(data.message);
      })
      .catch((error) => console.log(error));
  };
  const handleUpdate = (id) => {
    fetch(`http://localhost:4000/jobs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Redirect to the update page with the job ID in the URL
        window.location.href = `/adminjobsupdate?id=${id}`;
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <br></br>
          <h2 className="text-center">Admin Dashboard: Manage Job Postings</h2>
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
                onDelete={() => handleDelete(job._id)}
                onUpdate={() => handleUpdate(job._id)}
              >
              </JobCard>
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
