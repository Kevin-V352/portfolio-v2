import React, { FC } from 'react';

import * as S from './introduction-elements';

const Introduction: FC = (): JSX.Element => (
  <S.Container>
    <S.Title
      data-aos='fade-down'
      data-aos-easing='fade-down'
      data-aos-delay='100'
    >
      Introduccion
    </S.Title>
  </S.Container>
);

export default Introduction;
