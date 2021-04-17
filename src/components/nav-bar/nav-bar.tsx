import React, { FC, useState, useEffect, useContext } from 'react';
import * as S from './nav-bar-elements';
import {
  ArrComponent,
  Context,
  Coordinates,
} from '../../shared/interfaces/global-interfaces';
import { GlobalContex } from '../../context/contexts';

const NavBar: FC = (): JSX.Element => {
  const { coordinatesY } = useContext(GlobalContex) as Context;
  const [activePosition, setActivePostion] = useState<number>(0);
  const [positionOfSections, setPositionOfSections] = useState<
    Coordinates | undefined
  >();

  const positionOptions: ArrComponent[] = [
    {
      name: 'Yo',
      component: <S.UserIcon />,
      index: positionOfSections?.introductionY,
    },
    {
      name: 'Stack',
      component: <S.StackCodeIcon />,
      index: positionOfSections?.stackY,
    },
    {
      name: 'Proyectos',
      component: <S.CodeBranchIcon />,
      index: positionOfSections?.projectsY,
    },
    {
      name: 'Contacto',
      component: <S.ContactIcon />,
      index: positionOfSections?.contactY,
    },
  ];

  //Set the position in the document
  const positionView = (coordinatesY: number | undefined): void => {
    console.log(coordinatesY);
    window.scrollTo({
      top: coordinatesY,
      behavior: 'smooth',
    });
  };

  const activePositionIcon = (): void => {
    const positionY: number = window.pageYOffset;
    const positionArr = Object.values(coordinatesY);
    positionArr.forEach((position: number, index: number): void => {
      if (positionY + 1 > position) {
        setActivePostion(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', activePositionIcon);
    setPositionOfSections(coordinatesY);
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
