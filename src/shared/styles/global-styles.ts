import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --big-font-size: 10vw;
    --normal-font-size: 3vw;
    
    //Global colors
    --black: #1C1C1C;
		--gray: #B6B6B6;
		--orange: #E35E2A; 
		--transparent-gray: rgba(182, 182, 182, 0.3);
		--orange-gradient: linear-gradient(to top, #ff512f, #f09819);

    //Global transitions
		--transition-fast: ease 200ms;
		--transition-normal: ease 400ms;

    @media (min-width: 1025px) {
      --big-font-size: 2vw;
      --normal-font-size: 1vw;
    }
  };
  body {
    font-family: 'Quicksand', sans-serif;
    font-size: var(--normal-font-size);
    font-weight: bold;
    padding: 0;
    margin: 0;
    background-color: #26282B;
  };
`;

export default GlobalStyles;
