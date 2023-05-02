import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://your-api-url.com/jobs'
      );
      setJobs(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {jobs.map(job => (
        <div key={job._id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <p>{job.location}</p>
          // add more fields as needed
        </div>
      ))}
    </div>
  );
}

export default Jobs;
