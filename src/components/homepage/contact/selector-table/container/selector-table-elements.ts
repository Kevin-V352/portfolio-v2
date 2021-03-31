import styled from 'styled-components';

//ButtonTab props
interface BTProps {
  active: boolean;
}

export const Container = styled.div`
  height: calc(100% - (var(--big-font-size) + 1.6vh));
  width: 100%;
  //Styles when the virtual keyboard is displayed
  @media (max-width: 1025px) and (orientation: landscape) {
    height: 100%;
  }
`;

export const Header = styled.div`
  position: relative;
  height: 8%;
  //Styles when the virtual keyboard is displayed
  @media (max-width: 1025px) and (orientation: landscape) {
    display: none;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const OptionButton = styled.button`
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  color: ${(props: BTProps) => (props.active ? 'white' : 'var(--gray)')};
  font-size: var(--medium-font-size);

  @media (min-width: 1025px) {
    font-size: var(--big-font-size);
  }
`;

export const OptionMaker = styled.div`
  position: absolute;
  border-bottom: 0.5vh solid var(--orange);
  transition: var(--transition-normal);
`;

export const TransitionBox = styled.div`
  height: 92%;
  .fade-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    display: none;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
  //Styles when the virtual keyboard is displayed
  @media (max-width: 1025px) and (orientation: landscape) {
    height: 100%;
  }
`;
