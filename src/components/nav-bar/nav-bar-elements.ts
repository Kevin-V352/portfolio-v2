import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { BiGitBranch, BiSend, BiCube, BiUser } from 'react-icons/bi';

// Option Content Props
interface OCProps {
  active: boolean | undefined;
}

//Default settings for icons
const defaultConfigIcon: string = `
  margin: 0;
  margin-left: 0;
  font-size: 10vw;
  @media (min-width: 1025px) {
    margin-left: 1.5vw;
    font-size: 2vw;
  }
`;

//Configuration object for NavBarItem pseudo-classes (initial state)
const initialStateFrame: string = `
  position: absolute;
  content: '';
  height: 0;
  width: 0;
  box-sizing: border-box;
`;

//Configuration object for NavBarItem pseudo-classes (parameters for hover)
const secondaryStateFrame: string = `
  height: 100%;
  width: 100%;
  border: var(--orange) solid .2vw;
  transition: height 170ms linear, width 170ms linear 170ms;
`;

export const OptionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-fast);
  background-color: transparent;
  width: 100%;
  height: 100%;
  ${(props: OCProps) =>
    props.active
      ? 'color: var(--orange); transform: scale(1.15);'
      : 'color: var(--gray)'};

  //Screen greater than 1025px - desktop
  @media (min-width: 1025px) {
    justify-content: flex-start;
    width: min-content;
    height: 12vh;
  }
`;

export const OptionText = styled.span`
  margin-left: 1vh;
  user-select: none;
  display: none;
`;

export const Item = styled.li`
  position: relative;
  cursor: pointer;
  width: 25%;
  &:last-child {
    margin-top: auto;
    display: none;
    //Screen greater than 1025px - desktop
    @media (min-width: 1025px) {
      display: block;
    }
  }
  //Screen greater than 1025px - desktop
  @media (min-width: 1025px) {
    width: 100%;
    //Initial state after and before pseudo elements
    &:before {
      ${initialStateFrame};
      bottom: 0;
      left: 0;
    }
    &:after {
      ${initialStateFrame};
      top: 0;
      right: 0;
    }
    &:hover {
      //Animation display in the lower left edge
      &:before {
        ${secondaryStateFrame};
        border-right: none;
        border-bottom: none;
      }
      //Animation display in the upper right edge
      &:after {
        ${secondaryStateFrame};
        border-left: none;
        border-top: none;
      }
      ${OptionContent} {
        color: var(--orange);
        transform: scale(1.15);
        transition: var(--transition-fast);
      }
    }
  } ;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  height: 100%;
  //Screen smaller than 1025px - mobile
  flex-direction: row;
  //Screen greater than 1025px - desktop
  @media (min-width: 1025px) {
    flex-direction: column;
  }
`;

export const Container = styled.nav`
  z-index: 2;
  position: fixed;
  overflow: hidden;
  background-color: var(--black);
  transition: var(--transition-normal);
  //Screen smaller than 1025px - mobile
  width: 100vw;
  height: 10vh;
  bottom: 0;
  //Screen greater than 1025px - desktop
  @media (min-width: 1025px) {
    width: 5vw;
    height: 100vh;
    &:hover {
      width: 10vw;
      transition: var(--transition-normal);
      ${OptionText} {
        display: inline;
      }
    }
  }
  //Styles when the virtual keyboard is displayed
  @media (max-width: 1025px) and (orientation: landscape) {
    display: none;
  }
`;

export const CodeBranchIcon = styled(BiGitBranch)`
  ${defaultConfigIcon};
`;

export const StackCodeIcon = styled(BiCube)`
  ${defaultConfigIcon};
`;

export const ContactIcon = styled(BiSend)`
  ${defaultConfigIcon};
`;

export const UserIcon = styled(BiUser)`
  ${defaultConfigIcon};
`;

export const GitHubIcon = styled(FaGithub)`
  ${defaultConfigIcon};
`;
