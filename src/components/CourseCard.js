import {useState, useEffect} from 'react'

import PropTypes from 'prop-types';

import { Row, Col, Card, Button } from 'react-bootstrap';

export default function CourseCard({ course }) {
	// Use the state hook for this component to be able to store its state
		    // States are used to keep track of information related to individual components
	// Syntax
	// const [getter, setter] = useState(initialGetterValue);

	const {name, description, price} = course

	const [count, setCount] = useState(0);
	// Using the state hook returns an array with the first element being a value and the second element as a function that's used to change the value of the first element
	//console.log(useState(0));
	const [seats, setSeats] = useState(30);

	function enroll(){
		setCount(count + 1);
		setSeats(seats -1)
		console.log(`Enrollees: ${count}`);
		console.log(`Seats: ${seats}`);
		if(!seats){
			setCount(count)
			setSeats(seats)
			alert("No more seats")
		}
	}

	useEffect(() => {
		if(seats === 0){
			setSeats(false)
		}
	}, [seats])


    return (
        <Card>
            <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{course.description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>{course.price}</Card.Text>
                <Card.Subtitle>Seats</Card.Subtitle>
                <Card.Text>{seats}</Card.Text>
                <Card.Subtitle>Enrollees</Card.Subtitle>
                <Card.Text>{count}</Card.Text>
                <Button variant="primary" onClick={enroll}>Enroll</Button>
            </Card.Body>
        </Card>

    )
}
// Check if the CourseCard component is getting the correct prop types
		// Proptypes are used for validating information passed to a component and is a tool normally used to help developers ensure the correct information is passed from one component to the next
/*CourseCard.PropTypes = {
	// The "shape" method is used to check if a prop object conforms to a specific "shape"
	course: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
}*/

