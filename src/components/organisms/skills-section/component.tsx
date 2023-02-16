import { useTheme } from 'next-themes';
import React, { FC, useEffect, useState } from 'react'
import { colors, ScreenSizes } from 'src/common/dictionaries';
import { H3  } from 'src/components/atoms';
import styled from 'styled-components';
import Marquee from "react-fast-marquee";
import { v4 as uuid } from "uuid";

const cardItems = [
    {
        src: "images/logos/javascript-icon.svg",
        color: "white",
        name: "JavaScript"
    },
    {
        src: "images/logos/typescriptlang-icon.svg",
        color: "white",
        name: "Typescript"
    },
    {
        src: "images/logos/reactjs-icon.svg",
        color: "white",
        name: "React JS"
    },
    {
        src: "images/logos/nodejs-icon.svg",
        color: "white",
        name: "NodeJS"
    },
    {
        src: "images/logos/git-scm-icon.svg",
        color: "white",
        name: "Git"
    },
    {
        src: 'images/logos/nextjs-logo.svg',
        color: 'white',
        name: 'NextJS'
    },
    {
        src: "images/logos/styled-components.svg",
        color: 'white',
        name: 'Styled Components'
    },
    {
        src: "images/logos/getbootstrap-icon.svg",
        color: "white",
        name: "Bootstrap"
    },
    {
        src: "images/logos/flutterio-icon.svg",
        color: "white",
        name: "Flutter"
    },
    {
        src: "images/logos/figma-icon.svg",
        color: "white",
        name: "Figma"
    },
    {
        src: "images/logos/tailwindcss-icon.svg",
        color: "white",
        name: "Tailwindcss"
    },
]

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(122, 122, 138, 0.2);
    border: 1px solid #545569;
    box-sizing: border-box;
    backdrop-filter: blur(24px);
    border-radius: 5px;
    text-align: justify;
`;

const CardWrapper = styled.div`
    @media screen and (max-width: ${ScreenSizes.Medium}) {
        gap: 0px;
    };
`;

const Card = styled.div`
width: 80px;
height: 80px;
border-radius: 20px;
transition: 0.4s;

&:hover {
  transform: scale(1.1, 1.1);
  box-shadow: 5px 5px 10px 10px rgba(0,0,0,0.25), -5px -5px 10px 10px rgba(0,0,0,0.22);
}

@media screen and (max-width: ${ScreenSizes.Small}) {
    width: 50px;
    height: 50px;
};
`
const CardImg = styled.div`
width: inherit;
height: inherit;

img {
width: inherit;
height: inherit;
border-radius: 20px;
object-fit: cover;
}
`;

const CardTitle = styled.div`${({ color }) =>`
color: ${color}`};
text-align: center;
border-radius: 0px 0px 40px 40px;
font-weight: 500;
font-size: 16px;

@media screen and (max-width: ${ScreenSizes.Medium}) {
    font-size: 12px;
};
`

export const SkillsSection: FC = () => {
const {theme} = useTheme();
const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
return (
    <Wrapper id='skills' className='my-5 p-5'>
        <H3
            color={theme === 'light' ? colors.text.secondary : colors.text.primary }
            className='mb-3'
        >Skills</H3>
        <Marquee gradient={false} speed={30} className='overflow-hidden'>
        <CardWrapper className='d-flex flex-wrap flex-xl-nowrap justify-content-evenly align-items-center'>
                {cardItems.map(({src, color, name}) => {
                    return (
                    <Card key={uuid()} className='m-4'>
                        <CardImg><img src={src} alt={name} /></CardImg>
                        <CardTitle color={theme === 'light' ? colors.text.secondary : colors.text.primary }>{name}</CardTitle>
                    </Card>
                    )})}
            </CardWrapper>
        </Marquee>
    </Wrapper>
  )}
