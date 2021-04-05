import styled from 'styled-components';
import { FaPlay, FaGithub } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';

//Default settings for icons
const defaultConfigIcon: string = `
  font-size: 1.5vw;
  margin-right: 0.5vw;
`;

// Default settings for image | youtube player
const defaultBackgrounIcon: string = `
  height: 100%;
  width: 100%;
  grid-column: 1/4;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
`;

export const Name = styled.h2`
  font-size: var(--normal-font-size);
  color: var(--gray);
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  grid-column: 1/4;
`;

export const Container = styled.div`
  height: 95%;
  width: 90%;
  /* border: red solid 1px; */
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  grid-template-rows: 10% 75% 15%;
  transition: var(--transition-normal);
  align-items: center;
  &:hover {
    transform: scale(1.1);
    ${Name} {
      color: var(--white);
    }
  }
`;

export const Image = styled.img`
  ${defaultBackgrounIcon};
`;

export const YoutubePlayer = styled.iframe.attrs({
  title: 'YouTube video player',
  allow: `
  accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture;`,
})`
  ${defaultBackgrounIcon};
  border: none;
`;

export const Link = styled.a`
  background-color: var(--black);
  color: var(--gray);
  height: 100%;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition-fast);
  &:nth-child(3) {
    border-bottom-left-radius: var(--border-radius);
  }
  &:nth-child(5) {
    border-bottom-right-radius: var(--border-radius);
  }
  &:hover {
    transform: scale(1.1);
    color: var(--orange);
  }
  &:active {
    transform: scale(1);
  }
`;

export const GithubIcon = styled(FaGithub)`
  ${defaultConfigIcon}
`;

export const PlayIcon = styled(FaPlay)`
  ${defaultConfigIcon}
`;

export const ExploreIcon = styled(MdExplore)`
  ${defaultConfigIcon}
`;
