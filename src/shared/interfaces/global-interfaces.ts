import React, { Dispatch, SetStateAction } from 'react';

export interface ArrComponent {
  name: string;
  component: any;
}

export interface ArrStyledComponent {
  name: string;
  component: any;
  color: string;
}

export interface StyledComponentLink {
  name: string;
  component: any;
  color: string;
  link: string;
}

export interface InfoProject {
  name: string;
  img: string;
  githubLink: string;
  youtubeLink: string;
}

export interface Context {
  introductionY: number;
  stackY: number;
  projectsY: number;
  contactY: number;
  setCoordinatesY: any;
}
