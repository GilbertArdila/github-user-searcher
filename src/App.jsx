import {useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { setUser,setRepos} from './actions/actions';
import { ReposCart } from './containers/ReposCart';
import {UserCart} from './containers/UserCart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import './styles/userSearcher.css';
import { UserSearcher } from './components';



function App() {
  //getting global state from state with Hooks
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const user = useSelector(state => state.user);
  const repos = useSelector(state => state.repos);
  const dispatch = useDispatch();

  

  const [currentUser, setCurrentUser] = useState('octocat');
  const [searchedUser, setSearchedUser] = useState('');

  useEffect(() => {
   fetchUser();
   
   setSearchedUser('')
  }, [currentUser]);

  useEffect(() => {
  fetchRepos();
  }, [user])
  

  const fetchUser = async () => {
    dispatch(setUser(currentUser))
  };

  const fetchRepos = async () => {
    if(user){
      const {repos_url} = user
      dispatch(setRepos(repos_url))
    }
  };
  


  return (
    <>
    <header style={{width:'100vw', height:'100px', background:'black'}}></header>
    <main className="App">

    <UserSearcher 
    onClick={(e) => setCurrentUser(searchedUser)}
    onChange={(e) => setSearchedUser(e.target.value)}
    searchedUser={searchedUser}
    />

     {loading ? <p>...cargando</p> : error ? <p>{`${error}`}</p> : 
     
      <UserCart/>
     
     }
     {repos 
     ? <ReposCart/>
     :<p>...cargando repos</p>}
    </main>
    <footer style={{width:'100vw', height:'60px', background:'black'}}></footer>
    </>
    
  )
}

export default App
