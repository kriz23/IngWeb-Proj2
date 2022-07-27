import React from 'react';
import { Title } from 'components/Title';

const Hobbies = () => (
  <div className='flex flex-col items-center h-[8.875rem] md:mt-10'>
    <Title text='HOBBIES' />
    <div className='grid grid-cols-2 w-full'>
      <div className='self-start pl-7'>
        <ul className='list-disc'>
          <li>
            <p>Ir a cine</p>
          </li>
          <li>
            <p>Ver series</p>
          </li>
          <li>
            <p>Jugar videojuegos</p>
          </li>
        </ul>
      </div>
      <div className='self-start pl-7'>
        <ul className='list-disc'>
          <li>
            <p>Ver deportes</p>
          </li>
          <li>
            <p>Ir a restaurantes</p>
          </li>
          <li>
            <p>Escuchar música</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export { Hobbies };
