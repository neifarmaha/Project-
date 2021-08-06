import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { RegistreE } from "../../js/actions";
import { Redirect } from "react-router";
import "./registerform.css";
import Mouse from "../mouse/Mouse";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const registreNewUser = (e) => {
    e.preventDefault();
    dispatch(
      RegistreE({
        firstName,
        lastName,
        email,
        phonenumber,
        address,
        password,
      })
    );
  };
  const { isLoading, token } = useSelector((state) => state);
  return (
    <div>
      <Mouse/>
      {isLoading ? (
        <h1>...Loading</h1>
      ) : token ? (
        <Redirect to="/login" />
      ) : (
        <Form>
          <Form.Group className="block">
          <h1>Create Your Account</h1>
            <p> Tell Us About Yourself</p>
            <Form.Control
              type="text"
              placeholder="FirstName"
              className="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <Form.Control
              type="text"
              placeholder="LastName"
              className="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <Form.Control
              type="email"
              placeholder="Enter email"
              className="email1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              type="text"
              placeholder="Phone Number"
              className="phonenum"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />

            <Form.Control
              type="text"
              placeholder="Address"
              className="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Form.Control
              type="password"
              placeholder="Password"
              className="password1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={() => {window.location.href="/profile2"}}>
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};

export default RegisterForm;
