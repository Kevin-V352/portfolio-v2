import React, { FC } from 'react';
import Form from '../form/form';
import Links from '../links/links';

import * as S from './contact-elements';

const Contact: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.Column>
        <S.GridItem position={'1/3'}>
          <S.Title>Contacto</S.Title>
        </S.GridItem>
        <S.GridItem position={'1/2'}>
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
