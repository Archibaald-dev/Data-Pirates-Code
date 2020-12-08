import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch, Redirect, Link, NavLink} from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <NavLink to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Laptops</a>
                    <a className="dropdown-item" href="#">Webcams</a>
                    <a className="dropdown-item" href="#">Microphones</a>
                    <a className="dropdown-item" href="#">Screens</a>
                    <a className="dropdown-item" href="#">Stationeries</a>
                    <a className="dropdown-item" href="#">Printers</a>
                    <a className="dropdown-item" href="#">Supports</a>
                    <a className="dropdown-item" href="#">Keyboards and Mouses</a>
                    <a className="dropdown-item" href="#">Blog</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                
              </ul>
            </div>
          </nav>
           ) ;
    }
}

export default Navbar;
