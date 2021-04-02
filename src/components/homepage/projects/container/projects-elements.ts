import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-template-rows: auto;
  grid-auto-rows: 50vh;
  justify-content: center;
  align-items: center;
  justify-items: center;
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
