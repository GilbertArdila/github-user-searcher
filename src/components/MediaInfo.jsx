import React from 'react';
import { useSelector } from 'react-redux';
import { checkNull } from '../helpers/checkNull';


const MediaInfo = () => {
    const user=useSelector(state => state.user);


  return (
    <div className='UserCart__infoContainer__mediaInfo'>
        <p className='UserCart__infoContainer__mediaInfo--location'>Ubicación:{' '}{checkNull(user.location)}</p>
        <p className='UserCart__infoContainer__mediaInfo--twitter'>Twitter:{' '}{checkNull(user.twitter_username)}</p>
        <p className='UserCart__infoContainer__mediaInfo--mail'>Email:{' '}{checkNull(user.email)}</p>
        <p className='UserCart__infoContainer__mediaInfo--company'>Compañia:{' '}{checkNull(user.company)}</p>
    </div>
  )
}

export  {MediaInfo}