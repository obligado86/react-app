// built in inputs
import { Fragment } from 'react';

//pakage input
import { Container } from 'react-bootstrap';
import './App.css'

//components imports
import AppNavbar from './components/AppNavbar'
//import Courses from './pages/Courses'
//import Home from './pages/Home'
//import Register from './pages/Register'
import Login from './pages/Login'
// to be executed at homepage
/*import Banner from './components/Banner'
import Highlights from './components/Highlights'*/


function App() {
  return (
    /*
      - In React JS, multiple components rendered in a single component should be wrapped in a parent component.
      - Not doing so will return an error in our application.
      - The "Fragment" component ensures that this error can be prevented.
    */
    <>
      <AppNavbar />
      <Container>
        <Login />
        {/*<Register />
        <Home />
        <Courses />*/}
      </Container>
    </>

    //you can use this
    // <Fragment>
    //   <AppNavbar />
    //   <Banner />
    // </Fragment>

    // <div>
    //   <AppNavbar />
    //   <Banner />
    // </div>
  );
}

export default App;
