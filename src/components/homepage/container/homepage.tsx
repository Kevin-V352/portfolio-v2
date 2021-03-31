import React, { FC } from 'react';

import * as S from './homepage-elements';

import Stack from '../stack/stack';
import Contact from '../contact/container/contact';

const Homepage: FC = (): JSX.Element => {
  return (
    <S.Container>
      <Stack />
      <Contact />
    </S.Container>
  );
};

export default Homepage;
