import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, NavbarText, CardFooter } from 'reactstrap';

function Footer() {
    return (
        <CardFooter style={{backgroundColor: "wheat"}}
            color="light"
            expand="md"
            light
        >
            <div className="row my-4 text-center">
                <p>© Copyright 2022 "929EXAM"</p>
            </div>

        </CardFooter>
    )
}

export default Footer;