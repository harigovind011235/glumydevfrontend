import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

function RegisterScreen() {
  const dispatch = useDispatch();
  const registerUser = useSelector((state) => state.registerUser);
  const { loading, message } = registerUser;

  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    highestQualification: "None",
    courseStudied: "None",
    batchDetails: "None",
    placementStatus: "None",
    companyName: "",
    userType: "Alumni",
    resumeFile: '',
  }
  const [user, setUser] = useState(initialState);

  const [showSuccessMsg, setshowSuccessMsg] = useState(false);

  useEffect(() => {
    if (message && message["status"] === "success") {
      setshowSuccessMsg(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [dispatch, message]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setUser({...user,resumeFile:e.target.files[0]});
    console.log(user.resumeFile)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("password", user.password);
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("phone", user.phone);
    formData.append("highestQualification", user.highestQualification);
    formData.append("courseStudied", user.courseStudied);
    formData.append("batchDetails", user.batchDetails);
    formData.append("placementStatus", user.placementStatus);
    formData.append("companyName", user.companyName);
    formData.append("userType", user.userType);
    formData.append("resumeFile", user.resumeFile);
    console.log(formData);
    dispatch(userRegister(formData));
    setUser(initialState);
  };

  return (
    <>
      <Header />
      {showSuccessMsg && (
        <Message variant="success">SuccessFully Registered</Message>
      )}
      {loading && <Loader></Loader>}
      <Container className="mt-4">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1 className="text-center my-4">Register</h1>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  required
                  minLength={4}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="userType">
                <Form.Label>User Type</Form.Label>
                <Form.Control
                  as="select"
                  name="userType"
                  value={user.userType}
                  onChange={handleChange}
                  required
                >
                  <option value="Alumni">Alumni</option>
                  <option value="Employer">Employer</option>
                </Form.Control>
              </Form.Group>
              {user.userType === "Alumni" && (
                <Form.Group controlId="resumeFile">
                  <Form.Label>Upload Resume</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".pdf"
                    name="resumeFile"
                    onChange={handleFile}
                  />
                </Form.Group>
              )}

              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                  pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$"
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  required
                  pattern="^\d{10}$"
                />
              </Form.Group>

              {user.userType === "Alumni" ? (
                <Form.Group controlId="highestQualification">
                  <Form.Label>Highest Qualification</Form.Label>
                  <Form.Control
                    as="select"
                    name="highestQualification"
                    value={user.highestQualification}
                    onChange={handleChange}
                    required
                  >
                    <option value="None">None</option>
                    <option value="High School">High School</option>
                    <option value="Associate Degree">Associate Degree</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Doctorate">Doctorate</option>
                  </Form.Control>
                </Form.Group>
              ) : null}
              {user.userType === "Alumni" ? (
                <Form.Group controlId="courseStudied">
                  <Form.Label>Course studied at ICTAK</Form.Label>
                  <Form.Control
                    as="select"
                    name="courseStudied"
                    value={user.courseStudied}
                    onChange={handleChange}
                    required
                  >
                    <option value="None">None</option>
                    <option value="FSD">FSD</option>
                    <option value="DSA">DSA</option>
                    <option value="ML-AI">ML-AI</option>
                    <option value="RPA">RPA</option>
                    <option value="ST">ST</option>
                    <option value="CSA">CSA</option>
                  </Form.Control>
                </Form.Group>
              ) : null}
              {user.userType === "Alumni" ? (
                <Form.Group controlId="batchDetails">
                  <Form.Label>Batch details</Form.Label>
                  <Form.Control
                    as="select"
                    name="batchDetails"
                    value={user.batchDetails}
                    onChange={handleChange}
                    required
                  >
                    <option value="None">None</option>
                    <option value="KKEM">KKEM</option>
                    <option value="NORKA">NORKA</option>
                    <option value="KDISC">KDISC</option>
                  </Form.Control>
                </Form.Group>
              ) : null}

              {user.userType === "Alumni" ? (
                <Form.Group controlId="placementStatus">
                  <Form.Label>Placement Status</Form.Label>
                  <Form.Control
                    as="select"
                    name="placementStatus"
                    value={user.placementStatus}
                    onChange={handleChange}
                    required
                  >
                    <option value="None">None</option>
                    <option value="Placed">Placed</option>
                    <option value="Job-Seeking">Job-Seeking</option>
                  </Form.Control>
                </Form.Group>
              ) : null}

              {user.userType === "Employer" && (
                <Form.Group controlId="companyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter company name"
                    name="companyName"
                    value={user.companyName}
                    onChange={handleChange}
                  />
                </Form.Group>
              )}

              {user.placementStatus === "Placed" && (
                <Form.Group controlId="companyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter company name"
                    name="companyName"
                    value={user.companyName}
                    onChange={handleChange}
                  />
                </Form.Group>
              )}

              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "14vh" }}
              >
                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RegisterScreen;
