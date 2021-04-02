import styled from 'styled-components';

//Interfaces
interface ABProps {
  type: string;
  delay: string;
  fullContent: boolean;
  center: boolean;
}

export const AnimationBox = styled.div.attrs<ABProps>(({ type, delay }) => ({
  'data-aos': type,
  'data-aos-easing': type,
  'data-aos-delay': delay,
  'data-aos-duration': '500',
}))<ABProps>`
  ${({ fullContent }) => (fullContent ? 'width: 100%; height: 50%' : null)}
  ${({ center }) =>
    center
      ? 'display: flex; justify-content: center; align-items: center'
      : null}
`;
