import styled from 'styled-components';

//GridItem Props
interface GIProps {
  position: string;
}

//Default settings for inputs
const defaultConfigInput: string = `
	border-radius: .3rem;
	border: none;
	font-size: var(--normal-font-size);
	background-color: var(--transparent-gray);
	color: white;
  padding: 1vh;
  width: calc(100% - 2vh);
  @media (min-width: 1025px) {
    padding: 0.7vw;
    width: calc(100% - 1.5vw);
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15% 15% 60% 10%;
  //Screen greater than 1025px - desktop
  @media (min-width: 1025px) {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 15% 75% 10%;
  }
  //Styles when the virtual keyboard is displayed
  @media (max-width: 1025px) and (orientation: landscape) {
    grid-template-rows: 20% 20% 50% 10%;
  }
`;

export const GridItem = styled.div`
  grid-column: 1/3;
  padding: 0.5vw;
  //Screen greater than 1025px - desktop
  @media (min-width: 1025px) {
    grid-column: ${(props: GIProps) => props.position};
  }
`;

export const Label = styled.label`
  color: var(--gray);
  text-transform: uppercase;
  font-size: var(--normal-font-size);
  display: block;
`;

export const Input = styled.input`
  ${defaultConfigInput};
`;

export const TextArea = styled.textarea`
  ${defaultConfigInput};
  resize: none;
  height: calc(100% - (var(--normal-font-size) + 2vw));
`;

export const SubmitButton = styled.button`
  width: 100%;
  border-radius: 0.3rem;
  border: 0.15rem solid var(--gray);
  background-color: var(--black);
  color: var(--gray);
  font-size: var(--medium-font-size);
  text-transform: uppercase;
  transition: var(--transition-fast);
  &:active {
    transform: scale(0.8);
    border-color: var(--orange);
    color: var(--orange);
  }
  //Screen greater than 1025px - desktop
  @media (min-width: 1025px) {
    font-size: var(--big-font-size);
    &:hover {
      transition: var(--transition-fast);
      transform: scale(1.01);
      border-color: var(--orange);
      color: var(--orange);
    }
  }
`;
