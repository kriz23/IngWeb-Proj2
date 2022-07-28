import React from 'react';
import { Title } from 'components/Title';

const Estudios = () => (
  <div className='select-none flex flex-col items-center w-full'>
    <Title text='ESTUDIOS' />
    <div className='self-start xl:text-White'>
      <h4 className='mb-[0.438rem]'>
        <b>Ingeniería de Sistemas</b>
      </h4>
      <p className='mb-[0.438rem]'>Universidad de Antioquia</p>
      <p>2017 - Actualidad</p>
    </div>
  </div>
);

export { Estudios };
