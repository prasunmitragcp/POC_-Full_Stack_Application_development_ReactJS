
import { Component } from "react";
import logo from '../images/top_logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import { Link } from "react-router-dom";

export default class Navbar extends 
Component {

    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }


    render() {
        return (
            <div>
                {/* <img src={logo} alt="Course Portal"/> */}
            </div>
        )
    }
}