import { useTheme } from 'next-themes';
import React, { FC, useEffect, useState } from 'react'
import { colors, FontSize, ScreenSizes } from 'src/common/dictionaries';
import { P, H3, H1  } from 'src/components/atoms';
import styled from 'styled-components';

const Wrapper = styled.section`
    background: rgba(122, 122, 138, 0.2);
    border: 1px solid #545569;
    box-sizing: border-box;
    backdrop-filter: blur(24px);
    border-radius: 5px;
    padding: 100px;
    
    @media screen and (max-width: ${ScreenSizes.Medium}) {
    padding: 50px;
    };
`;

export const AboutSection: FC = () => {
const {theme} = useTheme();
const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
return (
    <Wrapper id='about' className='my-5'>
        <div className='mb-4 d-flex flex-column justify-content-between align-items-end'>
            <H1 className='' color={theme === 'light' ? colors.text.secondary : colors.text.primary }>Zhalgas Khamidulla</H1>
            <P 
            fontWeight={400}
            fontSize={FontSize.Large}
            color={theme === 'light' ? colors.text.secondary : colors.text.primary }
            >Web Developer</P>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <P 
            fontWeight={400}
            fontSize={FontSize.Large}
            color={theme === 'light' ? colors.text.secondary : colors.text.primary }
            >
                I am motivated web developer from Kazakhstan, Almaty.     
            </P>
        </div>
    </Wrapper>
  )}
