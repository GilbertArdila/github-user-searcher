import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import '../styles/userSearcher.css';

const UserSearcher = ({onChange,onClick,searchedUser}) => {
  

  return (
    <div className='UserSearcherContainer'>
    <input
    className='UserSearcherContainer__searcher'
    type={'search'} 
    value={searchedUser}
    onChange={onChange}
    />
    <FontAwesomeIcon icon={faMagnifyingGlass}
    className='UserSearcherContainer__icon'
    onClick={onClick}
    />
    </div>
    
  )
}

export  {UserSearcher}