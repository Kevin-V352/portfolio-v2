import styled from 'styled-components';

//GridItem Props
interface GIProps {
  position: string;
}

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 75% 15%;
  grid-template-rows: min-content auto;
  justify-content: center;
  overflow: hidden;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: var(--gray);
  border-bottom: 0.4vh solid var(--gray);
  width: 100%;
  text-align: center;
  margin: 0;
  font-size: var(--big-font-size);
`;

export const GridItem = styled.div`
  /* border: red solid 1px; */
  grid-column: ${(props: GIProps) => props.position};
`;
