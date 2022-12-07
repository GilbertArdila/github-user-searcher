import React from 'react';
import '../styles/headerStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <header className='Header'>
        <span><FontAwesomeIcon icon={faGithub}/></span>
        <h2>GitHub user´s searcher</h2>
    </header>
  )
}

export  {Header}