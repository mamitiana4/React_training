import React, { Component } from 'react' ;
import LogOut from '../img/Sign Out.png' ;
import Notification from '../img/Notification.png'
import {Link} from 'react-router-dom' ;

class Header extends Component {
  render() {
    return (
      <div 
      className="container-well menuContent"
      style={{height: '100px'}}>
        <div>
            <h2 className="project-title">Cloudify</h2>
        </div>
        <div 
        className="iconContent"
        style={{ 'padding-top': 10 }} >
            <img
                src={Notification}
                alt=""
                style={{ width: 35 }} />
            <Link to="/">
                <img 
                src={LogOut} 
                alt=""
                style={{width: 35}} />
            </Link>
        </div>
      </div>
    )
  }
}

export default Header ;
