import React from 'react';
import { useSelector } from 'react-redux';
import { checkNull } from '../helpers/checkNull';


const CenterInfo = () => {
const user=useSelector(state => state.user);

  return (
    <div className='UserCart__infoContainer__centerInfo'>
        <p className='UserCart__infoContainer__centerInfo--repos'>Repositorios:{' '}{checkNull(user.public_repos)}</p>
        <p className='UserCart__infoContainer__centerInfo--followers'>Seguidores:{' '}{checkNull(user.followers)}</p>
        <p className='UserCart__infoContainer__centerInfo--following'>Siguiendo:{' '}{checkNull(user.following)}</p>
    </div>
  )
}

export  {CenterInfo}