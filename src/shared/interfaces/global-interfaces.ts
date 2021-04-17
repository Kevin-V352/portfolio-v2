export interface ArrComponent {
  name: string;
  component: any;
  index: number | undefined;
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

export interface Coordinates {
  introductionY: number | undefined;
  stackY: number | undefined;
  projectsY: number | undefined;
  contactY: number | undefined;
}

export interface Context {
  coordinatesY: Coordinates;
}
