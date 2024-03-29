import {useState, useEffect} from 'react';

import {Form, Button} from 'react-bootstrap';

export default function Register(){

	const [email, setEmail] = useState('');
	const [password1, setPassword1] =useState('');
	const [password2, setPassword2] =useState('');
	// State to determine whether submit button is enabled or not
	const [isActive, setIsActive] = useState(false);

	console.log(email);
	console.log(password1);
	console.log(password2);

	function registerUser(e){
		e.preventDefault();
		setEmail('');
		setPassword1('');
		setPassword2('');
		alert('Thank you for registering')
	}

	useEffect(() => {
		// Validation to enable submit button when all fields are populated and both passwords match
		if((email !== '' && password1 !== '' && password2 !== '') && (password1 === password2)){
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [email, password1, password2]);

	return(
			// 2-way Binding (Bnding the user input states into their corresponding input fields via the onChange JSX Event Handler)
			<Form onSubmit={(e) => registerUser(e)}>
			      <Form.Group className="mb-3" controlId="userEmail">
			        <Form.Label>Email address</Form.Label>
			        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required />
			        <Form.Text className="text-muted">
			          We'll never share your email with anyone else.
			        </Form.Text>
			      </Form.Group>

			      <Form.Group className="mb-3" controlId="password1">
			        <Form.Label>Password</Form.Label>
			        <Form.Control type="password" placeholder="Password" value={password1} onChange={e => setPassword1(e.target.value)} required />
			      </Form.Group>

			      <Form.Group className="mb-3" controlId="password2">
			        <Form.Label>Password</Form.Label>
			        <Form.Control type="password" placeholder="Verify Password" value={password2} onChange={e => setPassword2(e.target.value)} required />
			      </Form.Group>
			      
			      {isActive ?
			      		<Button variant="primary" type="submit" id="submitBtn">
			      		  Submit
			      		</Button>
			      		:
			      		<Button variant="danger" type="submit" id="submitBtn" disabled>
			      		  Submit
			      		</Button>
			  		}
			    </Form>
		)
}