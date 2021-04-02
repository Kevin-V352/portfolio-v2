import React, { FC } from 'react';

import * as S from './homepage-elements';

import Stack from '../stack/stack';
import Contact from '../contact/container/contact';
import Projects from '../projects/container/projects';

const Homepage: FC = (): JSX.Element => {
  return (
    <S.Container>
      <Stack />
      <Projects />
      <Contact />
    </S.Container>
  );
};

export default Homepage;
