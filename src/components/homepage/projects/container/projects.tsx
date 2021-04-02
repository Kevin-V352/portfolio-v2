import React, { FC } from 'react';
import { InfoProject } from '../../../../shared/interfaces/global-interfaces';
import { AnimationBox } from '../../../../shared/styled-elements/global-elements';
import CardProject from '../card-project/card-project';

import * as S from './projects-elements';

const arrProjects: InfoProject[] = [
  {
    name: 'Horus - Wheater app',
    img: './assets/projects-img/1.jpg',
    githubLink: 'https://cutt.ly/Ycgfu8w',
    youtubeLink: 'https://www.youtube.com/embed/MXN1nmL-DQU',
  },
  {
    name: 'Cronos - Task manager',
    img: './assets/projects-img/1.jpg',
    githubLink: 'https://cutt.ly/QcgfKBW',
    youtubeLink: 'https://www.youtube.com/embed/MXN1nmL-DQU',
  },
  {
    name: 'Apolo - Song finder',
    img: './assets/projects-img/1.jpg',
    githubLink: 'https://cutt.ly/kcgfTJt',
    youtubeLink: 'https://www.youtube.com/embed/MXN1nmL-DQU',
  },
  {
    name: 'Six Games - Ecommerce videogames',
    img: './assets/projects-img/1.jpg',
    githubLink: 'https://cutt.ly/ucgfcR7',
    youtubeLink: 'https://www.youtube.com/embed/MXN1nmL-DQU',
  },
];

const Projects = () => {
  return (
    <S.Container>
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
