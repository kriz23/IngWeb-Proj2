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
    {/* <h1 className='text-3xl font-extrabold'>CV Starter Code</h1>
    <div className='flex flex-col'>
      <span className='text-indigo-500 text-lg'>With Tailwind...</span>
      <span className='text-gray-200'>And react router</span>
    </div> */}

    <div className='container md:containerT'>
      <div className='md:hidden'>
        <div className='section pt-4 px-4 pb-[1.563rem] bg-Black border-b-[5px] border-DarkBlue'>
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
      <div className='hidden md:flex md:col-span-3 md:bg-yellow-500 w-full h-full'>
        <p>HOLA</p>
      </div>
      <div className='hidden md:flex md:col-end-2 md:bg-blue-600 w-full h-full'>
        <p>HOLA</p>
      </div>
      <div className='hidden md:flex md:col-end-3 md:bg-red-600 w-full h-full'>
        <p>HOLA</p>
      </div>
      <div className='hidden md:flex md:col-end-2 md:bg-pink-600 w-full h-full'>
        <p>HOLA</p>
      </div>
      <div className='hidden md:flex col-end-3 bg-cyan-500 w-full h-full'>
        <p>HOLA</p>
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
