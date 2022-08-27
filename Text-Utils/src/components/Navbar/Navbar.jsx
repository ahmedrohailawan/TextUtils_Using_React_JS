import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import {Link } from "react-router-dom";

function Navbar(props) {
    var modetext
    if (props.mode === "dark"){
        modetext = "Disable Dark Mode"
    }else{
        modetext = "Enable Dark Mode"
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> {props.title} </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input style={{backgroundColor: props.mode === "dark" ? "black" : "white"}} onClick={props.togglemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{modetext}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
}
Navbar.defaultProps = {
    title: "set you title here"
}

export default Navbar
