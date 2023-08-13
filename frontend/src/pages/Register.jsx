import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";

import registerImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(credentials);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);
      dispatch({ type: "REGISTER_SUCCESS" });

      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };
  console.log(credentials);
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className='login__img'>
                <img src={registerImg} alt='' />
              </div>
              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt='' />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type='text'
                      placeholder='Username'
                      required
                      id='username'
                      name='userame'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type='email'
                      placeholder='Email'
                      required
                      id='email'
                      name='email'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type='password'
                      placeholder='Password'
                      required
                      id='password'
                      name='password'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className='btn secondary__btn auth__btn'
                    type='submit'
                  >
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to='/login'>Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
