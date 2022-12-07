import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { UserSearcher } from '../components/UserSearcher';
import { checkNull } from '../helpers/checkNull';
import '../styles/reposStyles.css';


const ReposCart = () => {

  const repos = useSelector(state => state.repos);
  const [filterRepo, setFilterRepo] = useState('');

  //to filter the repos by name
  const filteredRepos = repos.filter((repo) => {
    return (
      repo.name.toLowerCase().includes(filterRepo.toLowerCase())
    );
  });

  //to show all repos if there are not coincidences in searching
  let response;
  if (filteredRepos.length === 0) {
    response = repos
  } else {
    response = filteredRepos
  }

  return (
    <section className='ReposCartContainer'>
      {repos.length > 0
        ?
        <>
          <h2 className='ReposCartContainer__title'>Repositorios</h2>
          <UserSearcher onChange={(e) => setFilterRepo(e.target.value)} />
        </>

        : <h2 className='ReposCartContainer__title'>Parece que este usuario no tiene repositorios</h2>
      }


      {response.map((repo) => (
        <div key={repo.id} className='ReposCartContainer__cart'>
          <h3 className='ReposCartContainer__cart--name'>Nombre:{' '}{checkNull(repo.name)}</h3>
          <p className='ReposCartContainer__cart--language'>Lenguaje:{' '}{checkNull(repo.language)}</p>
          <p className='ReposCartContainer__cart--homepage'>Homepage:{' '}{checkNull(repo.homepage)}</p>
          <p className='ReposCartContainer__cart--description'>Descripción:{' '}{checkNull(repo.description)}</p>
          <p className='ReposCartContainer__cart--created'>Creado en:{' '}{checkNull(repo.created_at)}</p>
        </div>

      ))}



    </section>
  )
}

export { ReposCart }