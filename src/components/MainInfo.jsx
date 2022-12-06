import React from 'react';
import { useSelector } from 'react-redux';

import { checkNull } from '../helpers/checkNull';

const MainInfo = () => {
    const user = useSelector(state => state.user);

  return (
    <div className='UserCart__infoContainer__mainInfo'>
    <h3 className='UserCart__infoContainer__mainInfo--name'>Nombre:{' '}{checkNull(user.name)}</h3>
    <p className='UserCart__infoContainer__mainInfo--creation'>Creado en:{' '}{checkNull(user.created_at)}</p>
</div>
  )
}

export  {MainInfo}