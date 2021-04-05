import React, { FC, useState, useEffect, useRef, useContext } from 'react';
import * as S from './stack-elements';
import { AnimationBox } from '../../../shared/styled-elements/global-elements';
import { GlobalContex } from '../../../context/contexts';
import { getCoordinate } from '../../../shared/helpers/functions';
import {
  ArrStyledComponent,
  Context,
} from '../../../shared/interfaces/global-interfaces';

const Stack: FC = (): JSX.Element => {
  const stackRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { setCoordinatesY, coordinatesY } = useContext(GlobalContex) as Context;
  const relativePosition:
    | number
    | undefined = stackRef.current?.getBoundingClientRect().top;

  const stackIcons: ArrStyledComponent[] = [
    { name: 'HTML5', color: '#E35E2A', component: <S.Html5Icon /> },
    { name: 'CSS3', color: '#25A3DC', component: <S.Css3Icon /> },
    { name: 'JavaScript', color: '#F4DD11', component: <S.JsIcon /> },
    { name: 'TypeScript', color: '#396FBF', component: <S.TsIcon /> },
    { name: 'React JS', color: '#69D8FF', component: <S.ReactIcon /> },
    { name: 'Redux', color: '#743DB6', component: <S.ReduxIcon /> },
    { name: 'Material UI', color: '#2AA5F6', component: <S.MaterialUiIcon /> },
    { name: 'Bootstrap', color: '#8100EF', component: <S.BootstrapIcon /> },
    { name: 'Sass', color: '#CE699E', component: <S.SassIcon /> },
    {
      name: 'Styled Components',
      color: '#E8AD67',
      component: <S.StyledComponentsIcon />,
    },
    { name: 'Node JS', color: '#7AAA1A', component: <S.NodeIcon /> },
  ];

  useEffect(() => {
    setTimeout(() => {
      if (activeIndex === stackIcons.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 3000);
  }, [activeIndex]);

  useEffect(() => {
    setCoordinatesY({
      ...coordinatesY,
      stackY: getCoordinate(relativePosition),
    });
  }, [relativePosition]);

  return (
    <S.Container ref={stackRef}>
      <S.Title
        data-aos='fade-down'
        data-aos-easing='fade-down'
        data-aos-delay='100'
      >
        Tecnologías
      </S.Title>
      {stackIcons.map((item: ArrStyledComponent, index: number) => (
        <AnimationBox
          key={index}
          type='fade-down'
          delay={`${index}00`}
          fullContent={false}
          center={false}
        >
          <S.IconBox
            fontColor={item.color}
            active={index === activeIndex ? true : false}
          >
            {item.component}
            <S.IconName>{item.name}</S.IconName>
          </S.IconBox>
        </AnimationBox>
      ))}
    </S.Container>
  );
};

export default Stack;
