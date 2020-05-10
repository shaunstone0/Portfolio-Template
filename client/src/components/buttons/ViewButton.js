import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './ContactButton.css';
import '../../App.css';

function ViewButton() {
  const props = useSpring({
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 20 },
    config: { duration: 1000 },
  });
  return (
    <div>
      <Link to='/projects'>
        <animated.button
          type='submit'
          className='btn btn-contact'
          style={props}
        >
          View Work
        </animated.button>
      </Link>
    </div>
  );
}

export default ViewButton;
