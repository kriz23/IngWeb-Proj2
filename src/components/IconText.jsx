import React from 'react';
// import { IconContext } from 'react-icons';
import {
  FaEnvelope,
  FaMobile,
  FaMapMarkerAlt,
  FaLinkedin,
} from 'react-icons/fa';

const IconText = () => (
  <div className='flex flex-wrap h-full'>
    <div className='flex flex-wrap gap-2 items-center mb-3 w-full'>
      <FaEnvelope className='text-3xl' />
      <a href='mailto:cristhian.gonzalez@udea.edu.co'>
        <p>cristhian.gonzalez@udea.edu.co</p>
      </a>
    </div>
    <div className='flex flex-wrap gap-2 items-center mb-3 w-full'>
      <FaMobile className='text-3xl' />
      <a href='tel:+573142564668'>
        <p>
          <b>+57 314-2564668</b>
        </p>
      </a>
    </div>
    <div className='flex flex-wrap gap-2 items-center mb-3 w-full'>
      <FaMapMarkerAlt className='text-3xl' />
      <a
        href='https://www.google.com/maps/place/Medell%C3%ADn,+Antioquia'
        target='_blank'
        rel='noreferrer'
      >
        <p>Medellin, Colombia</p>
      </a>
    </div>
    <div className='flex flex-wrap gap-2 items-center w-full'>
      <FaLinkedin className='text-3xl' />
      <a
        href='https://www.linkedin.com/in/kriz23'
        target='_blank'
        rel='noreferrer'
      >
        <p>kriz23</p>
      </a>
    </div>
  </div>
);

export { IconText };
