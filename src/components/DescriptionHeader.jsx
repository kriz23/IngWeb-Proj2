import React from 'react';

const DescriptionHeader = ({ title_color, name_color, text_color }) => (
  <div className='flex flex-col items-start justify-start col-span-1 pl-4 gap-3 xl:gap-4 xl:p-0'>
    <b>
      <h3 className={`text-${title_color} text-left xl:text-[2.75rem]`}>
        Desarrollador Web
      </h3>
    </b>
    <b>
      <h3 className={`text-${name_color} text-left xl:text-[2rem]`}>
        Cristhian Javier González Rodríguez
      </h3>
    </b>
    <p
      className={`text-justify text-p font-OpenSans text-${text_color} xl:text-h4`}
    >
      Estudiante de ingenieria de sistemas apasionado por la tecnología, linux y
      por el desarrollo web en general. Me considero una persona diligente,
      autoexigente y en ocasiones bastante perfeccionista. Me gustan los retos,
      trabajar en equipo y aprender cosas nuevas constantemente; podría decir
      que trabajo mejor bajo presión pero eso sería sobrestimarme demasiado.
    </p>
  </div>
);

export { DescriptionHeader };
