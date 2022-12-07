import React from 'react';
import {useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { setUser,setRepos} from './actions/actions';
import { ReposCart } from './containers/ReposCart';
import {UserCart} from './containers/UserCart';
import { UserSearcher } from './components';
import { Spinner } from './components/Spinner';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';



function App() {
  //getting global state from state with Hooks
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const user = useSelector(state => state.user);
  const repos = useSelector(state => state.repos);
  const dispatch = useDispatch();

  
 
 
  const [currentUser, setCurrentUser] = useState('octocat');
  const [searchedUser, setSearchedUser] = useState('');

  //to set githubuser into localStorage
  if(currentUser !== 'octocat'){
    localStorage.setItem('githubuser',currentUser)
  }
  const localUser = localStorage.getItem('githubuser')
  



  useEffect(() => {
     fetchUser();
     setSearchedUser('')
  }, [currentUser]);

  useEffect(() => {
  fetchRepos();
  }, [user])

 
  const fetchUser = () => {
    if(localUser !==null){
      dispatch(setUser(localUser))
    }else{
      //in the very first time it will show octocat
      dispatch(setUser(currentUser))
     }
    
  };
 

  const fetchRepos = async () => {
    if(user){
      const {repos_url} = user
      dispatch(setRepos(repos_url))
    }
  };
  


  return (
    <>
    <Header/>
    <main className="App">

    <UserSearcher 
    onClick={(e) => setCurrentUser(searchedUser)}
    onChange={(e) => setSearchedUser(e.target.value)}
    searchedUser={searchedUser}
    />

     {loading ? <Spinner/> : error ? <p>{`${error}`}</p> 
     :user !== undefined
     ?  <UserCart/>
     :<p>El usuario que buscas no existe</p>
     
    
     
     
     }
     {user===undefined
     ?<p></p>
     : !repos 
     ?<p></p>
     :<ReposCart/>
     }
    
    </main>
   <Footer/>
    </>
    
  )
}

export default(App)
