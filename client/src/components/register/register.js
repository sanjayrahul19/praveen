import React, { useState } from "react";
import axios from "../../axios/axios";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    id: "",
    qualification: "",
    subject: "",
    role: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/signUp", user);
      if (data?.user) {
        alert(data.msg);
        console.log(data);
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.log(err);
    }
    setUser({
      name: "",
      id: "",
      qualification: "",
      subject: "",
      role: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="id"
        value={user.id}
        placeholder="Your Id"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="qualification"
        value={user.qualification}
        placeholder="Your Qualification"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="subject"
        value={user.subject}
        placeholder="Your Subject"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="role"
        value={user.role}
        placeholder="Your Role"
        onChange={handleChange}
      ></input>
      <input
        type="number"
        name="phoneNumber"
        value={user.phoneNumber}
        placeholder="Your phoneNumber"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="confirmPassword"
        value={user.confirmPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={handleSubmit}>
        Register
      </div>
      <div>or</div>
      <div className="button">
        <Link to="/">Login</Link>
      </div>
    </div>
  );
};

export default Register;
