import styled from 'styled-components';

//Interfaces
interface ABProps {
  type: string;
  delay: string;
}

export const AnimationBox = styled.div.attrs<ABProps>(({ type, delay }) => ({
  'data-aos': type,
  'data-aos-easing': type,
  'data-aos-delay': delay,
  'data-aos-duration': '500',
}))<ABProps>``;
