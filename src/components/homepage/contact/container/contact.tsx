import React, { FC, useEffect, useRef, useContext } from 'react';
import { GlobalContex } from '../../../../context/contexts';
import { Context } from '../../../../shared/interfaces/global-interfaces';
import { getCoordinate } from '../../../../shared/helpers/functions';
import Form from '../form/form';
import Links from '../links/links';

import * as S from './contact-elements';

const Contact: FC = (): JSX.Element => {
  const contactRef = useRef<HTMLElement>(null);
  let { coordinatesY } = useContext(GlobalContex) as Context;

  useEffect(() => {
    const relativePosition:
      | number
      | undefined = contactRef.current?.getBoundingClientRect().top;
    coordinatesY.contactY = getCoordinate(relativePosition);
  }, []);

  return (
    <S.Container ref={contactRef}>
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
    </S.Container>
  );
};

export default Contact;
