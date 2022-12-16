import React, { useState } from "react";
import "./login.css";
import axios from "../../axios/axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", user);
      if (data?.user) {
        alert(data.msg);
        navigate("/admin");
        console.log(data);
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.log(err);
    }
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        name="email"
        type="text"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <div className="button" onClick={handleSubmit}>
        Login
      </div>
      <div>or</div>
      <div className="button">
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
