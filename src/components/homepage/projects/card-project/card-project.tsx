import React, { FC } from 'react';
import { InfoProject } from '../../../../shared/interfaces/global-interfaces';
import * as S from './card-project-elements';

const CardProject: FC<InfoProject> = ({
  name,
  img,
  githubLink,
}: InfoProject): JSX.Element => {
  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.Image src={img} />
      <S.Link>
        <S.GithubIcon />
        GitHub
      </S.Link>
      <S.Link>
        <S.PlayIcon />
        Preview
      </S.Link>
      <S.Link>
        <S.ExploreIcon />
        Enlace
      </S.Link>
    </S.Container>
  );
};

export default CardProject;
