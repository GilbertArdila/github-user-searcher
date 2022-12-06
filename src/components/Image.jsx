import React from 'react';
import { checkNull } from '../helpers/checkNull';

const Image = ({url,name}) => {
  return (
    <div className='UserCart__imageContainer'>
                <img className='UserCart__imageContainer--image' src={url} alt={checkNull(name)} />
            </div>
  )
}

export  {Image}