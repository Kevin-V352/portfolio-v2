import React, { FC } from 'react';

import NavBar from './components/nav-bar/nav-bar';
import Homepage from './components/homepage/container/homepage';

import GlobalStyles from './shared/styles/global-styles';

const App: FC = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Homepage />
      <GlobalStyles />
    </>
  );
};

export default App;
