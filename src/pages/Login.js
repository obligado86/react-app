import {useState, useEffect} from 'react'

import {Form, Button} from 'react-bootstrap';

export default function Login(){

	const [email, setEmail] = useState('');
	const [password, setPassword] =useState('');
	
	const [isActive, setIsActive] = useState(false);

	function loginUser(e){
		e.preventDefault();
		localStorage.setItem('email', email)

		setEmail('');
		setPassword('');
		alert('You are now logged in')
	}

	useEffect(() => {
		// Validation to enable submit button when all fields are populated and both passwords match
		if(email !== '' && password !== ''){
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [email, password]);

	return (
			<Form onSubmit={(e) => loginUser(e)}>
				<h1>Login</h1>
			      <Form.Group className="mb-3" controlId="userEmail">
			        <Form.Label>Email address</Form.Label>
			        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required />
			      </Form.Group>

			      <Form.Group className="mb-3" controlId="password1">
			        <Form.Label>Password</Form.Label>
			        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
			      </Form.Group>
			      
			      {isActive ?
			      		<Button variant="success" type="submit" id="submitBtn">
			      		  Login
			      		</Button>
			      		:
			      		<Button variant="secondary" type="submit" id="submitBtn" disabled>
			      		  Login
			      		</Button>
			  		}
			    </Form>
		)
}