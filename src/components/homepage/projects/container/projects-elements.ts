import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-template-rows: min-content;
  grid-auto-rows: 46vh;
  justify-content: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: var(--gray);
  border-bottom: 0.4vh solid var(--gray);
  width: 100%;
  text-align: center;
  margin: 0;
  font-size: var(--big-font-size);
  grid-column: 1/3;
`;
