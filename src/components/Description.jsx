import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaSteam,
  FaSpotify,
} from 'react-icons/fa';

const Description = () => (
  <div className='flex flex-col items-center justify-center h-[24.375rem]'>
    <b>
      <h3 className='text-White mb-3 text-center'>Desarrollador Web</h3>
    </b>
    <div className="h-[12.5rem] w-[12.5rem] rounded-full border-[5px] border-MainBlue bg-[url('../assets/profile.png')] bg-cover bg-center mb-6">
      {/* <img src='https://pbs.twimg.com/media/D6uc2kBX4AAv3xV.jpg' alt='' /> */}
    </div>
    <div className='flex flex-wrap items-center justify-center text-2xl gap-4 text-White mb-3'>
      <a href='https://github.com/kriz23' target='_blank' rel='noreferrer'>
        <FaGithub />
      </a>
      <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
        <FaTwitter />
      </a>
      <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
        <FaInstagram />
      </a>
      <a
        href='https://steamcommunity.com/id/crztn23/'
        target='_blank'
        rel='noreferrer'
      >
        <FaSteam />
      </a>
      <a href='https://www.spotify.com/' target='_blank' rel='noreferrer'>
        <FaSpotify />
      </a>
    </div>
    <b>
      <h3 className='text-MainBlue text-center'>
        Cristhian Javier González Rodríguez
      </h3>
    </b>
  </div>
);

export { Description };
