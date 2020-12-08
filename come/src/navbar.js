import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch, Redirect, Link, NavLink} from 'react-router-dom';
import logo from './Assets/Logo.png'


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img src={logo}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to="home" className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/menu" className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menu
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink to="/laptop" className="dropdown-item" href="#">
                            Laptops
                            </NavLink>
                                <NavLink to="/webcams" className="dropdown-item" href="#">Webcams</NavLink>
                                <NavLink to="/microphones" className="dropdown-item" href="#">Microphones</NavLink>
                                <NavLink to="/screens" className="dropdown-item" href="#">Screens</NavLink>
                                <NavLink to="/stationeries" className="dropdown-item" href="#">Stationeries</NavLink>
                                <NavLink to="/printers" className="dropdown-item" href="#">Printers</NavLink>
                                <NavLink to="/supports" className="dropdown-item" href="#">Supports</NavLink>
                                <NavLink to="/keymouse" className="dropdown-item" href="#">Keyboards and Mouses</NavLink>
                                <NavLink to="/blog" className="dropdown-item" href="#">Blog</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink to="contact" className="nav-link text-white" href="#">Contact</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>




        ) ;
    }
}



export default Navbar;
