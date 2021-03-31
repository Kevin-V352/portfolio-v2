import styled from 'styled-components';
import * as fa from 'react-icons/fa';
import * as si from 'react-icons/si';

//Interfaces
interface IBProps {
  fontColor: string;
  active: boolean;
}

//Default settings for icons
const defaultConfigIcon: string = `
  font-size: 17vw;
  @media (min-width: 1025px) {
    font-size: 10vw;
  }
`;

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Column = styled.div`
  height: 90vh;
  width: 90%;
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

export const IconContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: calc(100% - (var(--big-font-size) + 1.6vh));
  grid-template-columns: repeat(4, 25%);
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--gray);
  transition: var(--transition-normal);
  ${(props: IBProps) =>
    props.active
      ? `color: ${props.fontColor};
		transform: scale(1.1);`
      : null}

  @media (min-width: 1025px) {
    &:hover {
      transform: scale(1.1);
      color: ${(props: IBProps) => props.fontColor};
    }
  }
`;

export const IconName = styled.span`
  font-size: var(--normal-font-size);
  text-align: center;
`;

export const SassIcon = styled(fa.FaSass)`
  ${defaultConfigIcon}
`;

export const ReactIcon = styled(fa.FaReact)`
  ${defaultConfigIcon}
`;

export const Html5Icon = styled(fa.FaHtml5)`
  ${defaultConfigIcon}
`;

export const JsIcon = styled(fa.FaJsSquare)`
  ${defaultConfigIcon}
`;

export const ReduxIcon = styled(si.SiRedux)`
  ${defaultConfigIcon}
`;

export const Css3Icon = styled(fa.FaCss3Alt)`
  ${defaultConfigIcon}
`;

export const TsIcon = styled(si.SiTypescript)`
  ${defaultConfigIcon}
`;

export const BootstrapIcon = styled(fa.FaBootstrap)`
  ${defaultConfigIcon}
`;

export const MaterialUiIcon = styled(si.SiMaterialUi)`
  ${defaultConfigIcon}
`;

export const StyledComponentsIcon = styled(si.SiStyledComponents)`
  ${defaultConfigIcon}
`;
