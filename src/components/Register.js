import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const RegisterForm = () => {
  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = registrationData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setRegistrationData({
      ...registrationData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", registrationData);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

    return (
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label className="d-none">Email address</Form.Label>
        <Form.Control 
        type="text"
        placeholder="Enter email" 
        name="email"
        value={email}
        onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        name="password"
        value={password}
        onChange={handleChange}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
  };
  
  export default RegisterForm;