import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo/logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='title'>
          <div className='title-inside'>Stone Designs</div>
          <div className='web-dev'>Full Stack Developer</div>
        </div>

        <div
          onMouseDown={this.props.handleMouseDown}
          className='hamburger-menu grow'
        >
          <div />
          <div />
          <div />
        </div>
      </nav>
    );
  }
}

export default Navbar;
