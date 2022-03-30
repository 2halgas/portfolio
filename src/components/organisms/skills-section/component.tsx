import { useTheme } from 'next-themes';
import React, { FC } from 'react'
import { colors, ScreenSizes } from 'src/common/dictionaries';
import { P, H3  } from 'src/components/atoms';
import styled from 'styled-components';

import { v4 as uuid } from "uuid";

const cardItems = [
    {
        src: "images/logos/javascript-icon.svg",
        color: "white",
        name: "JavaScript"
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
        src: "images/logos/typescriptlang-icon.svg",
        color: "white",
        name: "Typescript"
    },
    {
        src: "images/logos/getbootstrap-icon.svg",
        color: "white",
        name: "Bootstrap"
    },
    {
        src: 'images/logos/nextjs-logo.svg',
        color: 'white',
        name: 'NextJS'
    }
]

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(122, 122, 138, 0.2);
    border: 1px solid #545569;
    box-sizing: border-box;
    backdrop-filter: blur(24px);
    border-radius: 5px;
`;

const CardWrapper = styled.div`
    gap: 20px;
@media screen and (max-width: ${ScreenSizes.Medium}) {
    gap: 0px;
};
`;

const Card = styled.div`
width: 250px;
height: 250px;
border-radius: 40px;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
cursor: pointer;
transition: 0.4s;

&:hover {
  transform: scale(1.1, 1.1);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
}

@media screen and (max-width: ${ScreenSizes.Medium}) {
    width: 150px;
    height: 150px;
};

@media screen and (max-width: ${ScreenSizes.Small}) {
    width: 60px;
    height: 60px;
};
`
const CardImg = styled.div`
width: inherit;
height: inherit;
border-radius: 40px;

img {
width: inherit;
height: inherit;
border-radius: 40px;
object-fit: cover;
padding: 10px;
}
`;

const CardTitle = styled.div`${({ color }) =>`
color: ${color}`};
text-align: center;
border-radius: 0px 0px 40px 40px;
font-weight: bold;
font-size: 30px;
margin-top: -60px;
@media screen and (max-width: ${ScreenSizes.Medium}) {
    font-size: 16px;
    margin-top: -30px;
};
@media screen and (max-width: ${ScreenSizes.Small}) {
    font-size: 12px;
};
`

export const SkillsSetion: FC = () => {
const {theme} = useTheme()
return (
    <Wrapper className='my-5 p-5'>
        <H3  
            color={theme === 'light' ? colors.text.secondary : colors.text.primary } 
            className='mb-3'
        >Skills</H3>
        <P 
        color={theme === 'light' ? colors.text.secondary : colors.text.primary }
        className='col-12 col-md-10'
        >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, veniam, impedit vero cumque iusto doloremque neque non consequatur mollitia beatae nihil error deleniti sed inventore.
        </P>
        <CardWrapper className='d-flex flex-wrap justify-content-between align-items-center'>
                {cardItems.map(({src, color, name}) => {
                    return (
                    <Card key={uuid()} className='m-2 m-md-5'>
                        <CardImg><img src={src} alt={name} /></CardImg>
                        <CardTitle color={color}>{name}</CardTitle>
                    </Card>
                    )})}
            </CardWrapper>
    </Wrapper>
  )}
