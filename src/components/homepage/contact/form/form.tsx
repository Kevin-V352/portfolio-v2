import React, { FC } from 'react';

import * as S from './form-elements';

const Form = () => (
  <S.Form>
    <S.GridItem position={'1/2'}>
      <S.Label>nombre</S.Label>
      <S.Input />
    </S.GridItem>
    <S.GridItem position={'2/3'}>
      <S.Label>correo</S.Label>
      <S.Input />
    </S.GridItem>
    <S.GridItem position={'1/3'}>
      <S.Label>mensaje</S.Label>
      <S.TextArea />
    </S.GridItem>
    <S.GridItem position={'1/3'}>
      <S.SubmitButton type='button'>enviar</S.SubmitButton>
    </S.GridItem>
  </S.Form>
);

export default Form;
