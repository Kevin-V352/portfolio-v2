import styled from 'styled-components';
import Lottie from 'react-lottie';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 90%;
  grid-template-rows: min-content repeat(
      2,
      calc((100% - (var(--big-font-size) + 1.4vh)) / 2)
    );
  justify-content: center;
  justify-items: center;
  align-items: center;
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

export const AnimationLottie = styled(Lottie).attrs({
  height: '130%',
})``;

export const Description = styled.span`
  color: var(--gray);
  font-size: var(--big-font-size);
  width: max-content;
  text-align: center;
  align-self: flex-start;
`;
