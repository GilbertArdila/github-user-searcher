import {useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { setUser, setRepos} from './actions/actions';
function App() {
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const user = useSelector(state => state.user);
  const repos = useSelector(state => state.repos);
  const dispatch = useDispatch();

  useEffect(() => {
   console.log(`loading: ${loading}, error: ${error}, user: ${user}, repos: ${repos}`)
  }, [])
  

  return (
    <div className="App">
     
    </div>
  )
}

export default App
