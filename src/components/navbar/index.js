import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://www.nita.ac.in/" target="__blank"><img src={require('../../image/nita.png').default} style={{width:"40px",borderRadius:"30%"}} alt="be good"/></a>
                    {/* <a className="navbar-brand" href="#"> Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to = '/' className="nav-link active" aria-current="page" >HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to = '/about' className="nav-link active" aria-current="page" > GALLERY </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to = '/contact' className="nav-link active" aria-current="page" >CONTACT</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    DEPARTMENT </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="/department/computer"> COMPUTER  </NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/department/electrical"> ELECTRICAL </NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/department/mechanical"> MECHANICAL </NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/department/chemical">  CHEMICAL </NavLink></li>
                                    {/* <li><a className="dropdown-divider"> </a> </li> */}
                                    {/* <hr/> */}
                                    <li><a className="dropdown-item" href="#"> More ...</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
