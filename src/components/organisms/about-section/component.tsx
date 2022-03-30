import { useTheme } from 'next-themes';
import React, { FC } from 'react'
import { colors, ScreenSizes } from 'src/common/dictionaries';
import { P, H3  } from 'src/components/atoms';
import styled from 'styled-components';

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
    padding: 156px;
    @media screen and (max-width: ${ScreenSizes.Medium}) {
    padding: 64px;
    };
    @media screen and (max-width: ${ScreenSizes.Small}) {
    padding: 32px, 16px;
    };
`

export const AboutSection: FC = () => {
const {theme} = useTheme()
return (
    <Wrapper className='my-3'>
        <H3 className='mb-3' color={theme === 'light' ? colors.text.secondary : colors.text.primary }>About me</H3>
        <P color={theme === 'light' ? colors.text.secondary : colors.text.primary }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, veniam, impedit vero cumque iusto doloremque neque non consequatur mollitia beatae nihil error deleniti sed inventore.</P>
    </Wrapper>
  )}
