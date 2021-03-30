import React, { FC } from 'react';

import NavBar from './components/nav-bar/nav-bar';

import GlobalStyles from './shared/styles/global-styles';

const App: FC = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <GlobalStyles />
    </>
  );
};

export default App;
