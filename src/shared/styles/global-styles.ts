import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    //Global font-size
    --big-font-size: 10vw;
    --medium-font-size: 5vw;
    --normal-font-size: 4vw;

    @media (min-width: 1025px) {
      --big-font-size: 2vw;
      --normal-font-size: 1vw;
    }
    
    //Global colors
    --black: #1E2124;
		--gray: #B6B6B6;
		--orange: #2AA5F6; 
    --white: white;
		--transparent-gray: rgba(182, 182, 182, 0.3);

    //Global transitions
		--transition-fast: ease 200ms;
		--transition-normal: ease 400ms;

    //Global border
    --border-radius: 0.3vw;
  };
  body {
    padding: 0;
    margin: 0;
    background-color: 	#282b30;

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
