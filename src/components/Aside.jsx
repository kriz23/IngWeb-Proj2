import React from 'react';
import { Contacto } from 'components/Contacto';
import { Estudios } from 'components/Estudios';
import { Idiomas } from 'components/Idiomas';
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaSteam,
  FaSpotify,
} from 'react-icons/fa';

const Aside = () => (
  <div className='flex flex-col items-center gap-5'>
    <div>
      <div className="h-[18.75rem] w-[18.75rem] rounded-full border-[5px] border-MainBlue bg-[url('../assets/profile.png')] bg-cover bg-center mb-4" />
      <div className='flex flex-wrap items-center justify-center text-3xl gap-4 text-White mb-3'>
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
    </div>
    <Contacto />
    <Estudios />
    <Idiomas />
  </div>
);

export { Aside };
