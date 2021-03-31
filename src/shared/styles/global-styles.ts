import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --big-font-size: 10vw;
    --medium-font-size: 5vw;
    --normal-font-size: 4vw;
    
    //Global colors
    --black: #1C1C1C;
		--gray: #B6B6B6;
		--orange: #E35E2A; 
		--transparent-gray: rgba(182, 182, 182, 0.3);

    //Global transitions
		--transition-fast: ease 200ms;
		--transition-normal: ease 400ms;

    @media (min-width: 1025px) {
      --big-font-size: 2vw;
      --normal-font-size: 1vw;
    }
  };
  body {
    padding: 0;
    margin: 0;
    background-color: #26282B;

    //Custom scrollbar - Chrome
		&::-webkit-scrollbar {
			width: .5vh;
		};
		&::-webkit-scrollbar-track {
			background-color: var(--black);
		};
		&::-webkit-scrollbar-thumb {
			background: var(--orange);
		};
  };

  * {
    font-family: 'Quicksand', sans-serif;
    font-size: var(--normal-font-size);
    font-weight: bold;
  };

  input:focus, 
	select:focus, 
	button:focus,
	textarea:focus {
        outline: none;
  };
`;

export default GlobalStyles;
