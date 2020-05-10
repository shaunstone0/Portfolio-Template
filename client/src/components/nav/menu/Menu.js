import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  render() {
    var visibility = 'hide';

    if (this.props.menuVisibility) {
      visibility = 'show';
    }

    return (
      <div
        id='flyoutMenu'
        onClick={this.props.handleMouseDown}
        className={visibility}
      >
        <div className='flex'>
          <div className='nav-links'>
            <ul>
              <li>
                <Link to='/'>
                  <span className='link-span'>Home</span>
                </Link>
              </li>

              <li>
                <Link to='/projects'>
                  <span className='link-span'>Projects</span>
                </Link>
              </li>
              <li>
                <Link to='/contact'>
                  <span className='link-span'>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
