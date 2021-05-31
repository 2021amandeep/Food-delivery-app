import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
// import {DataContext} from './Context';

function LoginHeader() {

    let user = JSON.parse(localStorage.getItem('user'));
    // console.log(user)
    const history = useHistory();
    function logOut() {
        localStorage.clear();
        history.push('/')
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Food Delivery App</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    <Link to="/account">My Account</Link>
                    <Link to="/home">Home</Link>
                    {/* <Link to="/cart">Cart</Link> */}



                    {/* <NavDropdown title={user.userName}>
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        </NavDropdown> */}
                </Nav>
                <Nav>
                    <Link style={{ color: "mediumaquamarine" }} eventKey={2} to="/cart">
                        My Cart
                            </Link>

                </Nav>

                <Nav>
                    {localStorage.getItem('user') ?
                        <NavDropdown title={user.userName}>
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                        : null}
                </Nav>
            </Navbar>
        </div>
    )
}
export default LoginHeader;