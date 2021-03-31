import React, { FC } from 'react';

import * as S from './homepage-elements';

import Stack from '../stack/stack';

const Homepage: FC = (): JSX.Element => {
  return (
    <S.Container>
      <Stack />
    </S.Container>
  );
};

export default Homepage;
