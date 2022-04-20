import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, useToast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import Header from './components/Header';
import React, { useState } from 'react';

import { Button, Col, Container, Row } from "reactstrap";
import Menus from './components/Menus';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Photogallery from './components/Photogallery';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Coursedashboard from './Coursedashboard';


function App() {

  const adminUser=
  {
    email: "prasun@admin.com",
    password: "admin123"
  };

  const[user, setUser] = useState({name:"", email:""});
  const[error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
        console.log("Logged In");

        setUser({
          name: details.name,
          email: details.email
        })
    }
    else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  }

  const Logout = () =>{
    console.log("Logout");
    setUser({name:"", email:""})

  }

  return (
    
    <div className="App">
        
        {(user.email != "") ? (
          <div className="welcome">
            <h2>welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
            <Coursedashboard />
          </div>
          
          
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
    </div>
  );
}

export default App;
