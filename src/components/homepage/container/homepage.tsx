import React, { FC } from 'react';

import * as S from './homepage-elements';

import Stack from '../stack/stack';
import Contact from '../contact/container/contact';
import Projects from '../projects/container/projects';
import Introduction from '../introduction/introduction';

const Homepage: FC = (): JSX.Element => {
  return (
    <S.Container>
      <Introduction />
      <Stack />
      <Projects />
      <Contact />
    </S.Container>
  );
};

export default Homepage;
