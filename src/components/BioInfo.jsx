import React from 'react';
import { useSelector } from 'react-redux';
import { checkNull } from '../helpers/checkNull';
const BioInfo = () => {
    const user=useSelector(state => state.user);
  return (
    <div className='UserCart__infoContainer__bioInfo'>
    <h5 className='UserCart__infoContainer--bio'>Description:{' '}{checkNull(user.bio)}</h5>
 </div>
  )
}

export  {BioInfo}