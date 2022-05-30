import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap";
const Header = () => {
    return (
        <>
            <div style={{backgroundColor: "#FFF5D3"}}>
                <Navbar
                    style={{ backgroundColor: "wheat" }}
                    className="position-static"
                    expand="md"
                    light
                >
                    <NavbarBrand href="/">
                        929 EXAM :)
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink className='nav-link' to='home'>
                                    <Link to='home' className="nav-link">Home</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='aboutme'>
                                    <Link to='aboutme' className="nav-link">About me</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='gallery'>
                                    <Link to='gallery' className="nav-link">Gallery</Link>
                                </NavLink>
                            </NavItem>

                        </Nav>

                    </Collapse>
                </Navbar>
                <div className="py-5" >
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6 text-start">
                                <h1 class="display-5 fw-bold">929 Examination</h1>
                                <p class="col-md-8 fs-4">Monday, 30 May 2022 <br></br> Location: LX, Floor 11 <br></br> Time: 9Am - 9PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;