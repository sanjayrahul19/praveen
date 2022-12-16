import React from "react";
import "./App.css";
import Login from "./components/login/login";
import Home from "././components/homepage/homepage";
import Register from "./components/register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
