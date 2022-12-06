import React from 'react';
import { useSelector } from 'react-redux';
import { checkNull } from '../helpers/checkNull';
import '../styles/reposStyles.css';


const ReposCart = () => {

  const repos = useSelector(state => state.repos);



  return (
    <section className='ReposCartContainer'>
      <h2 className='ReposCartContainer__title'>Repositorios</h2>
      {repos.map((repo) => (
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