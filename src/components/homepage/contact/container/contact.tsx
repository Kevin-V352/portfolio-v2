import React, { FC } from 'react';
import SelectorTable from '../selector-table/container/selector-table';

import * as S from './contact-elements';

const Contact: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.Column>
        <S.Title>Contacto</S.Title>
        <SelectorTable />
      </S.Column>
    </S.Container>
  );
};

export default Contact;
