import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav
} from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

import Footer from './components/Footer'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Scott Young',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Title',
        subTitle: 'SubTitle',
        text: 'Take a look at my projects below'
      },
      About: {
        title: 'About Me',
        subTitle: 'SubTitle',
        text: 'Take a look at my projects below'
      },
      Contact: {
        title: 'Get in touch',
        subTitle: 'SubTitle',
        text: 'Take a look at my projects below'
      }
    }
  }

	render() {
		return(
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Scott Young</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <p>Body</p>
          <Footer />
        </Container>
      </Router>
    )
	}

}

export default App;
