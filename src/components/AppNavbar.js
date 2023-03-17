//react bootstrap components
/*
	import moduleName from "filePath"
*/
//import Container from "react-bootstrap/Container";
import {useState} from 'react'
import { Container, Navbar, Nav } from "react-bootstrap"
import {Link, NavLink} from 'react-router-dom';


export default function AppNavbar(){
	const [user, setUser] = useState(localStorage.getItem('email'));
	console.log(user)
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand as={Link} to="/">Zuitt Booking</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/courses" exact>Courses</Nav.Link>
                        {	(user !== null) ?
                        		<Nav.Link as={NavLink} to="/logout" exact>Logout</Nav.Link>
                        		:
                        		<>
                        			<Nav.Link as={NavLink} to="/login" exact>Login</Nav.Link>
                        			<Nav.Link as={NavLink} to="/register" exact>Register</Nav.Link>
                        		</>
                        }
                        
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
		)
}