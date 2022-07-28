import React from 'react';
import { Title } from 'components/Title';

const Idiomas = () => (
  <div className='select-none flex flex-col items-center md:mt-10 xl:mt-0 w-full'>
    <Title text='IDIOMAS' />
    <div className='self-start pl-7 xl:text-White'>
      <ul className='list-disc'>
        <li>
          <h4>
            <b>Español</b> - Nativo
          </h4>
        </li>
        <li>
          <h4>
            <b>Inglés</b> - B1
          </h4>
        </li>
      </ul>
    </div>
  </div>
);

export { Idiomas };
