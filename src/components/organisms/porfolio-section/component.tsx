import { useTheme } from 'next-themes';
import React, { FC, useEffect, useState } from 'react'
import { colors, ScreenSizes } from 'src/common/dictionaries';
import { P, H3  } from 'src/components/atoms';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const portfolioList = [
    {
        src: 'images/projects/iampartof.png',
        href: 'https://iampartof.org/',
        title: 'I am part of'
    },
    {
        src: 'images/projects/divine.png',
        href: 'https://divine.live/',
        title: 'Divine.live'
    },
    {
        src: 'images/projects/biteeu.svg',
        href: 'https://biteeu.com/',
        title: 'Biteeu EU'
    },
    {
        src: 'images/projects/ahau.png',
        href: 'https://ahau.kz/',
        title: 'Ahau.kz'
    },
    {
        src: 'images/projects/biteeu.svg',
        href: 'https://biteeu.in/',
        title: 'Biteeu IN'
    },
    {
        src: 'images/projects/metaforra.png',
        href: 'https://metaforra.com/',
        title: 'Metaforra'
    },
];

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

const CardWrapper = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 150px;
    text-decoration: none;
    border-radius: 5px;

@media screen and (max-width: ${ScreenSizes.Medium}) {
    width: 150px;
    height: 150px;
};
`;


export const PortfolioSection: FC = () => {
const {theme} = useTheme();
const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
return (
    <Wrapper id='portfolio' className='my-5 p-md-3'>
        <H3  
            color={theme === 'light' ? colors.text.secondary : colors.text.primary } 
            className='mb-3 pt-4'
        >Portfolio</H3>
        <P 
        color={theme === 'light' ? colors.text.secondary : colors.text.primary }
        className='text-center col-11 col-md-10'
        >
        My work experience is consist from these projects
        </P>
        <div className='d-flex flex-wrap justify-content-center col-12 col-md-10 my-3'>
            {
               portfolioList.map(({title, src, href}) => (
                        <CardWrapper className='m-md-3' key={uuid()} href={href} target="_blank">
                            <div className='h-100 d-flex justify-content-center align-items-center'>
                                <img className='align-self-center' width="100px" src={src} alt={title} />
                            </div>
                            <P 
                            color={theme === 'light' ? colors.text.secondary : colors.text.primary }
                            >{title}</P>
                        </CardWrapper>
               ))
            }
        </div>
    </Wrapper>
  )}
