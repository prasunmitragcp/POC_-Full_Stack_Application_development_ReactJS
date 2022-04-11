import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import Header from './components/Header';
import React from 'react';

import { Button, Col, Container, Row } from "reactstrap";
import Menus from './components/Menus';
import {BrowserRouter as Router, Route} from "react-router-dom"
import About from './components/About';



function App() {


  

  const btnHandle=()=>
  {
    toast.success("done", {
      position: "top-center"
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact  />
              <Route path="/add-course" component={Addcourse} exact />
              <Route path="/view-course" component={Allcourses} exact  />
              <Route path="/about" component={About} exact  />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
