import React, { FC } from 'react';
import Form from '../form/form';
import Links from '../links/links';

import * as S from './contact-elements';

const Contact: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.Column>
        <S.GridItem
          position={'1/3'}
          data-aos='fade-down'
          data-aos-easing='fade-down'
          data-aos-delay='100'
        >
          <S.Title>Contacto</S.Title>
        </S.GridItem>
        <S.GridItem
          position={'1/2'}
          data-aos='fade-down'
          data-aos-easing='fade-down'
          data-aos-delay='200'
        >
          <Form />
        </S.GridItem>
        <S.GridItem position={'2/3'}>
          <Links />
        </S.GridItem>
      </S.Column>
    </S.Container>
  );
};

export default Contact;
