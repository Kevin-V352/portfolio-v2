import React, { FC, useState, useEffect, useContext } from 'react';
import * as S from './nav-bar-elements';

import {
  ArrComponent,
  Context,
} from '../../shared/interfaces/global-interfaces';
import { GlobalContex } from '../../context/contexts';

const NavBar: FC = (): JSX.Element => {
  const [activePosition, setActivePostion] = useState<number>(0);
  const { coordinatesY } = useContext(GlobalContex) as Context;
  const { introductionY, stackY, projectsY, contactY } = coordinatesY;

  const positionOptions: ArrComponent[] = [
    { name: 'Yo', component: <S.UserIcon />, index: introductionY },
    { name: 'Stack', component: <S.StackCodeIcon />, index: stackY },
    { name: 'Proyectos', component: <S.CodeBranchIcon />, index: projectsY },
    { name: 'Contacto', component: <S.ContactIcon />, index: contactY },
  ];

  //Set the position in the document
  const positionView = (coordinatesY: number): void => {
    window.scrollTo({
      top: coordinatesY,
      behavior: 'smooth',
    });
  };

  const activePositionIcon = (): void => {
    const coordinateY: number = window.pageYOffset;
    const positionArr: number[] = [introductionY, stackY, projectsY, contactY];
    positionArr.forEach((position: number, index: number): void => {
      if (coordinateY > position) {
        setActivePostion(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', activePositionIcon);
  }, []);

  return (
    <S.Container>
      <S.List>
        {positionOptions.map((option: ArrComponent, index: number) => (
          <S.Item key={index} onClick={() => positionView(option.index)}>
            <S.OptionContent active={activePosition === index ? true : false}>
              {option.component}
              <S.OptionText>{option.name}</S.OptionText>
            </S.OptionContent>
          </S.Item>
        ))}
        <S.Item>
          <S.OptionContent active={false}>
            <S.GitHubIcon />
            <S.OptionText>GitHub</S.OptionText>
          </S.OptionContent>
        </S.Item>
      </S.List>
    </S.Container>
  );
};

export default NavBar;
