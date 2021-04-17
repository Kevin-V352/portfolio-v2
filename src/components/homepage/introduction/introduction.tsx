import React, { FC } from 'react';

import * as S from './introduction-elements';

const Introduction: FC = (): JSX.Element => (
  <S.Container>
    <S.Title data-aos='fade-down' data-aos-delay='100'>
      Introduccion
    </S.Title>
    <S.AnimationLottie
      options={{
        loop: false,
        animationData: require('../../../shared/json/init-animation.json'),
      }}
    />
    <S.Description data-aos='zoom-in' data-aos-delay='100'>
      Bienvenido a mi portfolio!
      <br />
      Soy Kevin Vega, un desarrollador Full-Stack.
      <br />
      Exploremos un poco este perfil 🤖
    </S.Description>
  </S.Container>
);

export default Introduction;
