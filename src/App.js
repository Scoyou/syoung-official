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

import './App.css';

import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

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
      about: {
        title: 'About Me',
        subTitle: 'SubTitle',
        text: 'Take a look at my projects below'
      },
      contact: {
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
          <Route
          exact
          path='/'
          render={
            () => <
            Home
            title={ this.state.home.title }
            subTitle={ this.state.home.subTitle }
            text={ this.state.home.text }
            />
          }/>
          <Route
          exact
          path='/about'
          render={
            () => <
            About
            title={ this.state.about.title }
            subTitle={ this.state.about.subTitle }
            text={ this.state.about.text }
            />
          }/>
          <Route
          exact
          path='/contact'
          render={
            () => <
            Contact
            title={ this.state.contact.title }
            subTitle={ this.state.contact.subTitle }
            text={ this.state.contact.text }
            />
          }/>
          <Footer />
        </Container>
      </Router>
    )
	}

}

export default App;
