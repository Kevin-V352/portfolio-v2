import styled from 'styled-components';

export const Container = styled.div`
  //Screen smaller than 1025px - mobile
  width: 100vw;
  //Screen greater than 1025px - desktop
  @media (min-width: 1025px) {
    margin-left: 5vw;
    width: 94.5vw;
  }
`;
