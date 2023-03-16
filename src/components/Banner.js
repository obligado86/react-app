import { Button, Row, Col } from 'react-bootstrap';

export default function Banner(){
	return (
			<Row>
				<Col className="p-5">
					<h1>Zuitt Coding Bootcamp</h1>
					<p>Opportunity for everyone, everywhere</p>
					<Button variant="primary">Enroll Now!</Button>
				</Col>
			</Row>
		);
}