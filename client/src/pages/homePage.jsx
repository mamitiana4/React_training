import React, { Component } from 'react'
import {Link} from 'react-router-dom' ;

class HomePage extends Component {
  render() {
    return (
      <div>
          <h1>Welcome to the brand new cloud</h1>
          <Link to="/userPage">UserPage</Link>
          <Link to="/loginPage">LoginPage</Link>
      </div>
    )
  }
}

export default HomePage ;
