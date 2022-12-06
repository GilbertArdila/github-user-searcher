import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import '../styles/userSearcher.css';
import { setUser } from '../actions/actions';

const UserSearcher = () => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [newUser, setNewUser] = useState('');

    const handleInput = (e) => {
        setNewUser(e.target.value)
        fetchUser()
    };

    const fetchUser = async () => {
        dispatch(setUser(newUser))
      };

  return (
    <div className='UserSearcherContainer'>
    <input type={'search'} className='UserSearcherContainer__searcher'/>
    <FontAwesomeIcon icon={faMagnifyingGlass}
    className='UserSearcherContainer__icon'
    onClick={(e) => handleInput(e)}
    />
    </div>
    
  )
}

export  {UserSearcher}