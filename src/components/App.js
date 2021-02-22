import React from "react";
import "../app.css";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import Projects from "../pages/Projects";
import { BrowserRouter, Route } from "react-router-dom";

export default () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
    </div>
  );
};
