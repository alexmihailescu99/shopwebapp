import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../static/img/logo.png";
export default class NavbarComponent extends React.Component {
    user = localStorage.getItem("user");
    loggedIn = localStorage.getItem("logged");
    role = localStorage.getItem("role");
    componentDidMount() {
       
    }
    returnNavbar() {
        if (this.loggedIn === "false") {
            return (
                <Navbar bg="light" expand="lg">
                <div className="container">
                 <a class="navbar-brand" href="">
                    <img src={logo} width="45" height="45" onMouseOver={e => {e.currentTarget.style.opacity="0.7"}} onMouseOut={e => {e.currentTarget.style.opacity="1"}} alt=""/>
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/smartphones" >Smartphones</NavDropdown.Item>
                            <NavDropdown.Item href="/laptops" >Laptops</NavDropdown.Item>
                            <NavDropdown.Item href="/gaming">Gaming Consoles</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/pcparts">PC Parts</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav.Link href="/login">Log in</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Navbar.Collapse>
                </div>
            </Navbar>
            );
        } else if (this.loggedIn === "true") {
            if (this.role === "ADMIN") {
                return (
                    <Navbar bg="light" expand="lg">
                        <div className ="container">
                     <a class="navbar-brand" href="">
                     <img src={logo} width="45" height="45" onMouseOver={e => {e.currentTarget.style.opacity="0.7"}} onMouseOut={e => {e.currentTarget.style.opacity="1"}} alt=""/>
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
    
                            <Nav.Link href="/add">Add Product</Nav.Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/smartphones" >Smartphones</NavDropdown.Item>
                                <NavDropdown.Item href="/laptops" >Laptops</NavDropdown.Item>
                                <NavDropdown.Item href="/gaming">Gaming Consoles</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/pcparts">PC Parts</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <NavDropdown title={this.user} id="basic-nav-dropdown">
                                <NavDropdown.Item href={"/user"} >Your Profile</NavDropdown.Item>
                                <NavDropdown.Item href={"/user/" + this.user + "/shoppingCart"}>Shopping Cart</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout" >Log Out</NavDropdown.Item>
                            </NavDropdown>
    
                    </Navbar.Collapse>
                    </div>
                </Navbar>
                )
            } else if (this.role === "USER") {
                return (
                    <Navbar bg="light" expand="lg">
                        <div className ="container">
                     <a class="navbar-brand" href="">
                     <img src={logo} width="45" height="45" onMouseOver={e => {e.currentTarget.style.opacity="0.7"}} onMouseOut={e => {e.currentTarget.style.opacity="1"}} alt=""/>
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/smartphones" >Smartphones</NavDropdown.Item>
                                <NavDropdown.Item href="/laptops" >Laptops</NavDropdown.Item>
                                <NavDropdown.Item href="/gaming">Gaming Consoles</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/pcparts">PC Parts</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <NavDropdown title={this.user} id="basic-nav-dropdown">
                                <NavDropdown.Item href={"/user"} >Your Profile</NavDropdown.Item>
                                <NavDropdown.Item href={"/user/" + this.user + "/shoppingCart"}>Shopping Cart</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout" >Log Out</NavDropdown.Item>
                            </NavDropdown>
    
                    </Navbar.Collapse>
                    </div>
                </Navbar>
                )
            }
        }
    }
    render(){
        if (this.user === null || this.loggedIn === null || this.role === null) {
            this.user = "null";
            this.loggedIn = "false";
            this.role = "ANON";
        }
        return(
            this.returnNavbar()
        );
    }
}