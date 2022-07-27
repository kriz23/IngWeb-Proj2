import React from 'react';
import { Title } from 'components/Title';

const CursosAfines = () => (
  <div className='flex flex-col items-center select-none'>
    <Title text='CURSOS AFINES' />
    <div className='self-start pl-7'>
      <ul className='list-disc'>
        <li>
          <p>Análisis y Diseño de Sistemas I y II</p>
        </li>
        <li>
          <p>Teoría de Lenguajes</p>
        </li>
        <li>
          <p>Arquitectura de Software</p>
        </li>
        <li>
          <p>Bases de Datos</p>
        </li>
        <li>
          <p>Comunicaciones I y II</p>
        </li>
        <li>
          <p>Arquitectura de Computadores</p>
        </li>
        <li>
          <p>Sistemas Operativos</p>
        </li>
      </ul>
    </div>
  </div>
);

export { CursosAfines };
