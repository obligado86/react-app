import CourseCard from '../components/CourseCard'

// import mock database
import coursesData from '../data/courses'


export default function Courses(){
	console.log(coursesData);

	// The "map" method loops through the individual course objects in our array and returns a component for each course
		    // Multiple components created through the map method must have a unique key that will help React JS identify which components/elements have been changed, added or removed
		    // Everytime the map method loops through the data, it creates a "CourseCard" component and then passes the current element in our coursesData array using the courseProp
	const courses = coursesData.map(course => {
		return (
				<CourseCard key={course.id} course={course} />
			)
	})
	return (
			<>
				{courses}
			</>
		)
}