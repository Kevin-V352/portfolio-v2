import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: min-content auto;
  grid-template-columns: 90%;
  justify-content: center;
  margin-bottom: 5vh;
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
