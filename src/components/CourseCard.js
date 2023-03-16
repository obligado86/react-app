import { Row, Col, Card, Button } from 'react-bootstrap';
export default function CourseCard() {
	return (
		<Row className="mt-3 mb-3">
			<Col>
				<Card>
			     	<Card.Body>
			        	<Card.Title>
			        		<h4>Sample Course</h4>
			        	</Card.Title>
			        		<Card.Text>
			         			
			         			<strong>Description</strong><br/>

			         			This is a sample course offering
			         			<br/><br/>
			         			<strong>Price</strong><br/>
			         			Php:40,000
			        		</Card.Text>
			      	</Card.Body>
			      	<Button variant="primary" className="col-2 mb-3 mx-3">Enroll</Button>
				</Card>
			</Col>
		</Row>
	)
}