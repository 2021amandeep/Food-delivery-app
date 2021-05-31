import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Form from './form';

function Header() {
    // let user = JSON.parse(localStorage.getItem('user'));
    // console.log(user)
    // const history = useHistory();
    // function logOut() {
    //     localStorage.clear();
    //     history.push('/home')
    // }
    
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Food Delivery App</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    
                                <Link to="/home">Home</Link>
                                <Link to="/form">Login</Link>
                            
                    
                </Nav>
                {/* {localStorage.getItem('user') ?
                    <Nav>
                        <NavDropdown title={user.userName}>
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : null} */}
            </Navbar>
            <Form/>
        </div>
    )
}
export default Header;