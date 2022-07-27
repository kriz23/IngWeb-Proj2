// import { Title } from 'components/Title';
import { Description, DescriptionT } from 'components/Description';
import { Contacto } from 'components/Contacto';
import { Perfil } from 'components/Perfil';
import { Estudios } from 'components/Estudios';
import { Idiomas } from 'components/Idiomas';
import { ExpLaboral } from 'components/ExpLaboral';
import { CursosAfines } from 'components/CursosAfines';
import { Hobbies } from 'components/Hobbies';
import { Aside } from 'components/Aside';
import { DescriptionHeader } from 'components/DescriptionHeader';

import React from 'react';

const Home = () => (
  <main>
    {/* <h1 className='text-3xl font-extrabold'>CV Starter Code</h1>
    <div className='flex flex-col'>
      <span className='text-indigo-500 text-lg'>With Tailwind...</span>
      <span className='text-gray-200'>And react router</span>
    </div> */}

    <div className='container2'>
      <div className='pt-4 px-4 pb-[1.563rem] bg-Black border-b-[5px] border-DarkBlue md:hidden'>
        <Description />
      </div>
      <div className='pt-[1.125rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue md:hidden'>
        <Contacto />
      </div>
      <div className='pt-[1.25rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue md:hidden'>
        <Perfil />
      </div>
      <div className='pt-[1.125rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue md:hidden'>
        <Estudios />
      </div>
      <div className='pt-[1.125rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue md:hidden'>
        <Idiomas />
      </div>
      <div className='pt-[1.125rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue md:hidden'>
        <ExpLaboral />
      </div>
      <div className='pt-[1.125rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue md:hidden'>
        <CursosAfines />
      </div>
      <div className='pt-[1.125rem] px-4 pb-[1.563rem] bg-Gray border-b-[5px] border-DarkBlue md:hidden'>
        <Hobbies />
      </div>
      <div className='hidden md:flex col-span-3 bg-Black border-b-[5px] border-DarkBlue pt-4 px-6 pb-2 xl:hidden'>
        <DescriptionT />
      </div>
      <div className='hidden md:flex col-end-2 bg-DarkGray border-b-[5px] border-DarkBlue py-[1.875rem] px-12 xl:hidden'>
        <Contacto />
      </div>
      <div className='hidden md:flex flex-col col-end-3 bg-DarkGray border-b-[5px] border-DarkBlue py-[1.875rem] px-12 xl:hidden'>
        <Estudios />
        <Idiomas />
      </div>
      <div className='hidden md:flex col-end-2 bg-DarkGray border-b-[5px] border-DarkBlue py-[1.875rem] px-8 xl:hidden'>
        <ExpLaboral />
      </div>
      <div className='hidden md:flex flex-col col-end-3 bg-DarkGray border-b-[5px] border-DarkBlue py-[1.875rem] px-8 xl:hidden'>
        <CursosAfines />
        <Hobbies />
      </div>
      <div className='hidden xl:flex w-screen'>
        <aside className='w-[28.26%] flex flex-col bg-Black border-r-[5px] border-b-[5px] border-DarkBlue items-center justify-start pt-4 px-8 pb-4'>
          <Aside />
        </aside>
        <div className='w-[71.74%] flex flex-col '>
          <div className='pt-4 px-12 pb-2 bg-DarkGray h-[28.35%] border-b-[5px] border-DarkBlue'>
            <DescriptionHeader
              title_color='Black'
              name_color='MainBlue'
              text_color='Black'
            />
          </div>
          <div className='h-[71.65%] pt-4 px-12 pb-2 bg-Gray flex flex-col justify-between border-b-[5px] border-DarkBlue'>
            <div className='grid grid-cols-2 h-[80%] pt-6'>
              <div className='flex col-span-1'>
                <ExpLaboral />
              </div>
              <div className='flex flex-col col-span-1 pl-6'>
                <CursosAfines />
                <Hobbies />
              </div>
            </div>
            <div className='w-full h-[82px] self-center flex items-center justify-center mb-8 bg-gradient-to-r from-MainBlue to-DarkBlue rounded-3xl'>
              <b>
                <h3 className='text-White'>
                  Made With ❤ | Ingenieía Web | 2022
                </h3>
              </b>
            </div>
          </div>
        </div>
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
