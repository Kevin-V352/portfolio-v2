import styled from 'styled-components';

//GridItem Props
interface GIProps {
  position: string;
}

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  //Styles when the virtual keyboard is displayed
  @media (max-width: 1025px) and (orientation: landscape) {
    align-items: flex-end;
  }
`;

export const Column = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 85% 15%;
  grid-template-rows: 10% 90%;
  //Screen smaller than 1025px - mobile
  height: 80vh;
  //Screen greater than 1025px - desktop
  @media (min-width: 1025px) {
    height: 90vh;
  }
  //Styles when the virtual keyboard is displayed
  @media (max-width: 1025px) and (orientation: landscape) {
    /* display: none; */
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: var(--gray);
  border-bottom: 0.4vh solid var(--gray);
  width: 100%;
  text-align: center;
  margin: 0;
  font-size: var(--big-font-size);
  //Styles when the virtual keyboard is displayed
  @media (max-width: 1025px) and (orientation: landscape) {
    display: none;
  }
`;

export const GridItem = styled.div`
  /* border: red solid 1px; */
  grid-column: ${(props: GIProps) => props.position};
`;