import React, { FC } from 'react';
import { InfoProject } from '../../../../shared/interfaces/global-interfaces';
import { AnimationBox } from '../../../../shared/styled-elements/global-elements';
import CardProject from '../card-project/card-project';

import * as S from './projects-elements';

const arrProjects: InfoProject[] = [
  {
    name: 'Horus - Wheater app',
    img: './assets/projects-img/1.jpg',
    githubLink: 'hola',
  },
  {
    name: 'Cronos - Task manager',
    img: './assets/projects-img/1.jpg',
    githubLink: 'hola',
  },
  {
    name: 'Apolo - Song finder',
    img: './assets/projects-img/1.jpg',
    githubLink: 'hola',
  },
  {
    name: 'Six Games - Ecommerce videogames',
    img: './assets/projects-img/1.jpg',
    githubLink: 'hola',
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
          />
        </AnimationBox>
      ))}
    </S.Container>
  );
};

export default Projects;
