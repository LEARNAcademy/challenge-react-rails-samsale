import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import NavBar from './NavBar'

class Main extends React.Component {
  render () {
    return (
      <Router>
      <div>
      <h1>Challenge Test</h1>
      <hr></hr>
      <NavBar/>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={ContactUs} />
      </div>
      </Router>
    );
  }
}

export default Main
