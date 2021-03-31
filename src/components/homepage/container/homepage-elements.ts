import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  //Screen smaller than 1025px - mobile
  width: 100vw;
  //Screen greater than 1025px - desktop
  @media (min-width: 1025px) {
    margin-left: 5vw;
    width: 95vw;
  }
`;
