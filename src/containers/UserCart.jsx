import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/userStyles.css';
import { InfoContainer } from './InfoContainer';
import { Image } from '../components';

const UserCart = () => {

    const user = useSelector(state => state.user);
    
   

    return (
        <section className='UserCart'>
           
           <Image 
            url={user.avatar_url}
            name={user.name}
            />
            <InfoContainer/>
           
            

        </section>
    )
}

export { UserCart }