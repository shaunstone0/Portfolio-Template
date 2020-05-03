import React from 'react';
import './../../App.css';
import './Landing.css';
import ContactButton from '../buttons/ContactButton';
import ViewButton from '../buttons/ViewButton';
import { useSpring, animated } from 'react-spring';

const Landing = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });

  const flyIn = useSpring({
    from: { marginLeft: 200, opacity: 0 },
    to: { marginLeft: 0, opacity: 1 },
    config: { duration: 1000 },
  });
  return (
    <div className='marginnav '>
      <div className='uppercase bold landing-title'>
        <animated.div className='yellow-bg black large developer' style={props}>
          Full Stack Developer
        </animated.div>
        <animated.div className='bold medium' style={flyIn}>
          Innovative Websites
        </animated.div>
        <animated.div className='bold medium' style={flyIn}>
          WordPress Templates
        </animated.div>
        <animated.div className='bold medium' style={flyIn}>
          Multiple Technologies
        </animated.div>
      </div>
      <div className='flex landing-title landing-buttons'>
        <ContactButton />
        <ViewButton />
      </div>
    </div>
  );
};

export default Landing;
