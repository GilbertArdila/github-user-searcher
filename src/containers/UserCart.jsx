import React from 'react';
import { useSelector } from 'react-redux';
import { checkNull } from '../helpers/checkNull';
import '../styles/index.css';
import { InfoContainer } from './InfoContainer';
import { Image } from '../components';

const UserCart = () => {

    const user = useSelector(state => state.user);
    

    return (
        <div className='UserCart'>
           
            <Image 
            url={user.avatar_url}
            name={user.name}
            />
            <InfoContainer/>

        </div>
    )
}

export { UserCart }