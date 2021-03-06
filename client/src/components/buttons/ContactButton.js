import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './ContactButton.css';
import '../../App.css';

const ContactButton = () => {
  const props = useSpring({
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 0 },
    config: { duration: 1000 },
  });
  return (
    <div>
      <Link to='/contact'>
        <animated.button
          type='submit'
          className='btn btn-contact'
          style={props}
        >
          Contact Me
        </animated.button>
      </Link>
    </div>
  );
};

export default ContactButton;
