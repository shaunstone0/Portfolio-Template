import React, { Component } from 'react';
import logo from '../../img/logo/logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='logo'>
          <img src={logo} alt='logo' />
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
