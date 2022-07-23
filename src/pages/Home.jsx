// import { Title } from 'components/Title';
import { Description } from 'components/Description';
import { Contacto } from 'components/Contacto';
import { Perfil } from 'components/Perfil';
import { Estudios } from 'components/Estudios';
import { Idiomas } from 'components/Idiomas';
import { ExpLaboral } from 'components/ExpLaboral';
import { CursosAfines } from 'components/CursosAfines';
import { Hobbies } from 'components/Hobbies';
import React from 'react';

const Home = () => (
  <main>
    <h1 className='text-3xl font-extrabold'>CV Starter Code</h1>
    <div className='flex flex-col'>
      <span className='text-indigo-500 text-lg'>With Tailwind...</span>
      <span className='text-gray-200'>And react router</span>
    </div>

    <div className='container'>
      <div className='section pt-4 '>
        <Description />
      </div>
      <div className='section pt-[1.125rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue'>
        <Contacto />
      </div>
      <div className='section pt-[1.25rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue'>
        <Perfil />
      </div>
      <div className='section pt-[1.125rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue'>
        <Estudios />
      </div>
      <div className='section pt-[1.125rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue'>
        <Idiomas />
      </div>
      <div className='section pt-[1.125rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue'>
        <ExpLaboral />
      </div>
      <div className='section pt-[1.125rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue'>
        <CursosAfines />
      </div>
      <div className='section pt-[1.125rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue'>
        <Hobbies />
      </div>
    </div>

    {/* <div className='flex flex-col items-center justify-between h-screen'>
      <Title text='CONTACTO' />
      <Title text='ESTUDIOS' />
      <Title text='IDIOMAS' />
      <Title text='EXP. LABORAL' />
    </div> */}
  </main>
);

export default Home;
