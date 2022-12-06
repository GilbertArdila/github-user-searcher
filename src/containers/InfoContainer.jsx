import React from 'react';
import { MainInfo,BioInfo,CenterInfo, MediaInfo, ComplementaryInfo } from '../components';

const InfoContainer = () => {

  return (
    <div className='UserCart__infoContainer'>
    <MainInfo/>
     <BioInfo/>
    <CenterInfo/>
    <MediaInfo/>
    <ComplementaryInfo/>
</div>
  )
}

export {InfoContainer}