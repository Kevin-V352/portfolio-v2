import styled from 'styled-components';
import { FaWhatsapp, FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

//Interfaces
interface ILProps {
  fontColor: string;
  active: boolean;
}

//Default settings for icons
const defaultConfigIcon: string = `
  font-size: 5vw;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(4, 25%);
`;

export const IconLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: var(--transition-normal);
  ${(props: ILProps) =>
    props.active
      ? `color: ${props.fontColor}; transform: scale(1.1);`
      : 'color: var(--gray);'};
  &:hover {
    transform: scale(1.1);
    color: ${(props: ILProps) => props.fontColor};
  }
  &:active {
    transform: scale(1);
  }
`;

export const IconName = styled.span`
  font-size: var(--normal-font-size);
  text-align: center;
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  ${defaultConfigIcon};
`;

export const TelegramIcon = styled(FaTelegramPlane)`
  ${defaultConfigIcon};
`;

export const LinkedinIcon = styled(FaLinkedinIn)`
  ${defaultConfigIcon};
`;

export const GmailIcon = styled(SiGmail)`
  ${defaultConfigIcon};
`;
