import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.jpg";
export default class NavbarComponent extends React.Component {
    render(){
        return(
            <Navbar bg="light" expand="lg">
                 <a class="navbar-brand" href="">
                    <img src={logo} width="45" height="45" alt=""/>
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">Account</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Smartphones</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Laptops</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Gaming Consoles</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">PC Parts</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}