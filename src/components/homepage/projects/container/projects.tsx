import React, { FC, useEffect, useRef, useContext } from 'react';
import * as S from './projects-elements';
import CardProject from '../card-project/card-project';
import { GlobalContex } from '../../../../context/contexts';
import { arrProjects } from '../../../../shared/data/data';
import { getCoordinate } from '../../../../shared/helpers/functions';
import { AnimationBox } from '../../../../shared/styled-elements/global-elements';
import {
  Context,
  InfoProject,
} from '../../../../shared/interfaces/global-interfaces';

const Projects: FC = (): JSX.Element => {
  const projectsRef = useRef<HTMLElement>(null);
  const { coordinatesY } = useContext(GlobalContex) as Context;

  useEffect(() => {
    const relativePosition:
      | number
      | undefined = projectsRef.current?.getBoundingClientRect().top;
    coordinatesY.projectsY = getCoordinate(relativePosition);
  }, []);

  return (
    <S.Container ref={projectsRef}>
      <S.Title
        data-aos='fade-down'
        data-aos-easing='fade-down'
        data-aos-delay='100'
      >
        Proyectos
      </S.Title>
      {arrProjects.map((item: InfoProject, index: number) => (
        <AnimationBox
          key={index}
          type='fade-down'
          delay={`${index}00`}
          fullContent={true}
          center={true}
        >
          <CardProject
            name={item.name}
            img={item.img}
            githubLink={item.githubLink}
            youtubeLink={item.youtubeLink}
          />
        </AnimationBox>
      ))}
    </S.Container>
  );
};

export default Projects;
