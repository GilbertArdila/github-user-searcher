import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/footerStyles.css';

const Footer = () => {
  return (
    <footer className='Footer'>
        <span><FontAwesomeIcon icon={faSquareGithub}/></span>
        <span><FontAwesomeIcon icon={faSquareFacebook}/></span>
        <span><FontAwesomeIcon icon={faLinkedin}/></span>
    </footer>
  )
}

export  {Footer}