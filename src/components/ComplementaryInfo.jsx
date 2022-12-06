import React from 'react';
import { useSelector } from 'react-redux';
import { checkNull } from '../helpers/checkNull';


const ComplementaryInfo = () => {

    const user=useSelector(state => state.user);


  return (
     <div className='UserCart__infoContainer__comlementaryInfo'>
        <p className='UserCart__infoContainer__comlementaryInfo--gist'>Guist:{' '}{checkNull(user.public_gists)}</p>
        <a href={user.blog} target={'_blank'}> <p className='UserCart__infoContainer__comlementaryInfo--blog'>Blog:{' '}{checkNull(user.blog)}</p></a>
        <p className='UserCart__infoContainer__comlementaryInfo--type'>Tipo de usuario:{' '}{checkNull(user.type)}</p>
    </div>
  )
}

export  {ComplementaryInfo}