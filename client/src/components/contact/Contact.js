import React from 'react';
import './Contact.css';
function Contact() {
  return (
    <div className='marginnav'>
      <div className='contact-header yellow-bg uppercase bold'> Contact Me</div>
      <div className='bold flex justify-center contact-header-text'>
        I am a Fullstack Web Developer who focuses on JavaScript Frameworks and
        PHP. If you are interested in getting in contact for me about furture
        projects, see the options below.
      </div>

      <div className='contact-info flex'>
        <div className='contact-left'>
          <span className='bold uppercase'>Email:</span> shaunstone0@outlook.com
          <p>
            <span className='bold uppercase'>Phone:</span> +49 0151 000000
          </p>
        </div>
        <div className='contact-right'>
          <div className='right-title uppercase bold'> About Shaun Stone</div>
          <div className='right-content'>
            <p>
              Shaun Stone is a Full stack Web Developer. He has been designing
              and building we applications for more then 10 years and has a goal
              of learning and designing a web application in every single
              JavaScript framework there is. Also, he wishes to become more
              familiar with Nodejs, and Java so the back-end side of web
              development comes a little bit easier for him.
            </p>
            <p>
              For a career, he currently does Freelance work for multiple
              companies but wants to settle down to one so he can become a
              senior web developer. He wants to plan the projects and be the one
              to talk to the customers. Another goal would be to teach web
              development in college. He is currently applying for a master’s
              degree in teaching and hopes to use that to become a professor or
              technology.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
