import React, { FC, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NavBar from './components/nav-bar/nav-bar';
import Homepage from './components/homepage/container/homepage';

import GlobalStyles from './shared/styles/global-styles';

const App: FC = (): JSX.Element => {
  useEffect(() => {
    AOS.init({
      duration: 200,
    });
  }, []);

  return (
    <>
      <NavBar />
      <Homepage />
      <GlobalStyles />
    </>
  );
};

export default App;
