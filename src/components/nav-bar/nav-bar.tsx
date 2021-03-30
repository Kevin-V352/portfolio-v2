import React, { FC, useState } from 'react';

import * as S from './nav-bar-elements';

import { ArrComponent } from '../../shared/interfaces/global-interfaces';

const NavBar: FC = (): JSX.Element => {
  const [activePosition, setActivePostion] = useState<number>(0);

  const positionOptions: ArrComponent[] = [
    { name: 'Yo', component: <S.UserIcon /> },
    { name: 'Stack', component: <S.StackCodeIcon /> },
    { name: 'Proyectos', component: <S.CodeBranchIcon /> },
    { name: 'Contacto', component: <S.ContactIcon /> },
  ];

  return (
    <S.Container>
      <S.List>
        {positionOptions.map((option: ArrComponent, index: number) => (
          <S.Item key={index}>
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
