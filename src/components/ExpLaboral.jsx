import React from 'react';
import { Title } from 'components/Title';

const ExpLaboral = () => (
  <div className='select-none flex flex-col items-center'>
    <Title text='EXP. LABORAL' />
    <div className='self-start'>
      <h4 className='mb-0'>
        <b>Administrador Laboratorios IS</b>
      </h4>
      <p className='mb-0'>
        <b>Universidad de Antioquia</b>
      </p>
      <p className='mb-0'>Sept 2021 - Actualidad</p>
      <ul className='list-disc pl-7 mb-5'>
        <li>
          <p>Administración de Servidores Linux</p>
        </li>
        <li>
          <p>Virtualización de recursos de hardware</p>
        </li>
        <li>
          <p>Despliegue de aplicativos en Docker</p>
        </li>
        <li>
          <p>Despliegue de páginas Web</p>
        </li>
        <li>
          <p>Administración de Redes</p>
        </li>
        <li>
          <p>Creación y configuración de imágenes de Sistemas Operativos</p>
        </li>
      </ul>
      <h4 className='mb-0'>
        <b>Auxiliar de Programación</b>
      </h4>
      <p className='mb-0'>
        <b>Universidad de Antioquia</b>
      </p>
      <p className='mb-0'>Ago, 2020 - Sept 2021</p>
      <ul className='list-disc pl-7 mb-5'>
        <li>
          <p>Desarrollo de aplicativos en Angular</p>
        </li>
      </ul>
    </div>
  </div>
);

export { ExpLaboral };
