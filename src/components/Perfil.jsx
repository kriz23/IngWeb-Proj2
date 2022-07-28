import React from 'react';
import { Title } from 'components/Title';

const Perfil = () => (
  <div className='select-none flex flex-col items-center'>
    <Title text='PERFIL' />
    <p className='text-justify text-p font-OpenSans'>
      Estudiante de ingeniería de sistemas apasionado por la tecnología, linux y
      por el desarrollo web en general. Me considero una persona diligente,
      autoexigente y en ocasiones bastante perfeccionista. Me gustan los retos,
      trabajar en equipo y aprender cosas nuevas constantemente; podría decir
      que trabajo mejor bajo presión pero eso sería sobrestimarme demasiado.
    </p>
  </div>
);

export { Perfil };
