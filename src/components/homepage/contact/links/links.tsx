import React, { FC, useState, useEffect } from 'react';
import { StyledComponentLink } from '../../../../shared/interfaces/global-interfaces';
import { AnimationBox } from '../../../../shared/styled-elements/global-elements';

import * as S from './links-elements';

const Links: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const arrLink: StyledComponentLink[] = [
    {
      component: <S.WhatsappIcon />,
      color: '#3DE058',
      name: 'Whatsapp',
      link: 'https://cutt.ly/pciCYK5',
    },
    {
      component: <S.TelegramIcon />,
      color: '#3C9FD8',
      name: 'Telegram',
      link: 'https://cutt.ly/CciXEY5',
    },
    {
      component: <S.LinkedinIcon />,
      color: '#1B6BAD',
      name: 'Linkedin',
      link: 'https://cutt.ly/SciJ4KG',
    },
    {
      component: <S.GmailIcon />,
      color: '#E14537',
      name: 'Gmail',
      link: 'mailto:kevinvega2070@gmail.com',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      if (activeIndex === arrLink.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 3000);
  }, [activeIndex]);

  return (
    <S.Container>
      {arrLink.map((item: StyledComponentLink, index: number) => (
        <AnimationBox
          key={index}
          type='fade-left'
          delay={`${index}00`}
          fullContent={false}
          center={true}
        >
          <S.IconLink
            fontColor={item.color}
            active={index === activeIndex ? true : false}
            href={item.link}
          >
            {item.component}
            <S.IconName>{item.name}</S.IconName>
          </S.IconLink>
        </AnimationBox>
      ))}
    </S.Container>
  );
};

export default Links;
