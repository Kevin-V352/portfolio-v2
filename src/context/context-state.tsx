import React, { FC } from 'react';
import { Coordinates } from '../shared/interfaces/global-interfaces';
import { Provider } from './contexts';

const Contex: FC = ({ children }): JSX.Element => {
  let coordinatesY: Coordinates = {
    introductionY: 0,
    stackY: 0,
    projectsY: 0,
    contactY: 0,
  };

  return <Provider value={{ coordinatesY }}>{children}</Provider>;
};

export default Contex;
