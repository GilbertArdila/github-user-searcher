import React from 'react';
import { useSelector } from 'react-redux';
import { checkNull } from '../helpers/checkNull';


const ReposCart = () => {

    const repos = useSelector(state => state.repos);
   


  return (
    <>
       <h2>Repositorios</h2>
        {repos.map((repo) => (
            <div key={repo.id}>
             <h3>Nombre:{' '}{checkNull(repo.name)}</h3>
            <p>Lenguaje:{' '}{checkNull(repo.language)}</p> 
            <p>Homepage:{' '}{checkNull(repo.homepage)}</p>
            <p>Descripción:{' '}{checkNull(repo.description)}</p>
            <p>Creado en:{' '}{checkNull(repo.created_at)}</p>
           
            
            </div>
           
        ))}
        
    </>
  )
}

export  {ReposCart}