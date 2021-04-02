import styled from 'styled-components';
import { FaPlay, FaGithub } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';

//Default settings for icons
const defaultConfigIcon: string = `
  font-size: 1.5vw;
  margin-right: 0.5vw;
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
  }
`;

export const Name = styled.h2`
  font-size: var(--normal-font-size);
  color: var(--gray);
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  grid-column: 1/4;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  grid-column: 1/4;
  border-radius: 0.5vw;
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
  transition: var(--transition-fast);
  &:nth-child(3) {
    border-bottom-left-radius: 0.5vw;
  }
  &:nth-child(5) {
    border-bottom-right-radius: 0.5vw;
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
