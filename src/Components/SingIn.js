import React from 'react'
import { Button,Form } from 'react-bootstrap';
const formStyle = { width:'700px', marginLeft: '350px', marginTop: '50px' };


function SingIn() {
  return (
    <Form style={formStyle}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your First Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your Last Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email Address</Form.Label>
      <Form.Control type="email" placeholder="Enter your Email Address" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Phone number</Form.Label>
      <Form.Control type="number" placeholder="Enter your Phone number" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default SingIn