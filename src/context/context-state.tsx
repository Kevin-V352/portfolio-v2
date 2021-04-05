import React, { FC, useState } from 'react';
import { Coordinates } from '../shared/interfaces/global-interfaces';
import { Provider } from './contexts';

const Contex: FC = ({ children }): JSX.Element => {
  const [coordinatesY, setCoordinatesY] = useState<Coordinates>({
    introductionY: 0,
    stackY: 0,
    projectsY: 0,
    contactY: 0,
  });

  return (
    <Provider
      value={{
        coordinatesY,
        setCoordinatesY,
      }}
    >
      {children}
    </Provider>
  );
};

export default Contex;
