import {useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { setUser} from './actions/actions';
import {UserCart} from './containers/UserCart';


function App() {
  //getting global state from state with Hooks
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const user = useSelector(state => state.user);
  const repos = useSelector(state => state.repos);
  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState('octocat');

  useEffect(() => {
   fetchUser();
  }, []);

  const fetchUser = async () => {
    dispatch(setUser(currentUser))
  };
 

  return (
    <>
    <header style={{width:'100vw', height:'100px', background:'black'}}></header>
    <main className="App">
      <input type="search" name="searcher" id="" style={{width:'80%',maxWidth:'300px', paddind:'5px', margin:'0 auto'}} />
     {loading ? <p>...cargando</p> : error ? <p>Error</p> : 
     <div>
      <UserCart/>
     </div>
     }
    </main>
    <footer style={{width:'100vw', height:'60px', background:'black'}}></footer>
    </>
    
  )
}

export default App
