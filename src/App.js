import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import UserDetailPage from "./Pages/UserDetailPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div
          style={{ width: "100%", position: "sticky", top: "0", zIndex: "100" }}
        >
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/home" element={<Home />} />
          <Route path="/userdetails" element={<UserDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
