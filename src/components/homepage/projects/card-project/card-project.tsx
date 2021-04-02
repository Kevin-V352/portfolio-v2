import React, { FC, useState } from 'react';
import { InfoProject } from '../../../../shared/interfaces/global-interfaces';
import * as S from './card-project-elements';

const CardProject: FC<InfoProject> = ({
  name,
  img,
  githubLink,
  youtubeLink,
}: InfoProject): JSX.Element => {
  const [onVideo, setOnVideo] = useState<boolean>(false);

  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      {onVideo ? (
        <S.YoutubePlayer src={youtubeLink} allowFullScreen />
      ) : (
        <S.Image src={img} />
      )}
      <S.Link href={githubLink}>
        <S.GithubIcon />
        GitHub
      </S.Link>
      <S.Link onClick={() => setOnVideo(true)}>
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
