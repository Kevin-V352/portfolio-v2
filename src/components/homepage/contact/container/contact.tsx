import React, { FC } from 'react';
import { AnimationBox } from '../../../../shared/styled-elements/global-elements';
import Form from '../form/form';
import Links from '../links/links';

import * as S from './contact-elements';

const Contact: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.Column>
        <S.GridItem position={'1/3'}>
          <AnimationBox type='fade-down' delay={'100'} fullContent={false}>
            <S.Title>Contacto</S.Title>
          </AnimationBox>
        </S.GridItem>
        <S.GridItem position={'1/2'}>
          <AnimationBox
            type='fade-down'
            delay={'200'}
            style={{ width: '100%', height: '100%' }}
            fullContent={false}
          >
            <Form />
          </AnimationBox>
        </S.GridItem>
        <S.GridItem position={'2/3'}>
          <Links />
        </S.GridItem>
      </S.Column>
    </S.Container>
  );
};

export default Contact;
