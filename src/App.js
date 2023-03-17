// built in inputs
import { Fragment, useState } from 'react';

//pakage input
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';


import './App.css'

//components imports
import AppNavbar from './components/AppNavbar'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Error from './pages/Error'
// to be executed at homepage
/*import Banner from './components/Banner'
import Highlights from './components/Highlights'*/

// React JS is a single page application (SPA)
// Whenever a link is clicked, it functions as if the page is being reloaded but what it actually does is it goes through the process of rendering, mounting, rerendering and unmounting components
// When a link is clicked, React JS changes the url of the application to mirror how HTML accesses its urls
// It renders the component executing the function component and it's expressions

// After rendering it mounts the component displaying the elements
// Whenever a state is updated or changes are made with React JS, it rerenders the component
// Lastly, when a different page is loaded, it unmounts the component and repeats this process
// The updating of the user interface closely mirrors that of how HTML deals with page navigation with the exception that React JS does not reload the whole page

function App() {
    const [isActive, setIsActive] = useState(false);
  return (
    // The `BrowserRouter` component will enable us to simulate page navigation by synchronizing the shown content and the shown URL in the web browser.
    <Router>
      <Container fluid>
        <AppNavbar/>
        {/*The `Routes` component holds all our Route components. It selects which `Route` component to show based on the URL Endpoint. For example, when the `/courses` is visited in the web browser, React.js will show the `Courses` component to us.*/}
          <Routes>
            <Route path='*' element={<Error/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>

            <Route path="" element={<Error/>}/>

          </Routes>
      </Container>
    </Router>

    /*
      - In React JS, multiple components rendered in a single component should be wrapped in a parent component.
      - Not doing so will return an error in our application.
      - The "Fragment" component ensures that this error can be prevented.
    */
 /*   <>
      <AppNavbar />
      <Container>
        <Login />
        <Register />
        <Home />
        <Courses />
      </Container>
    </>
*/
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
