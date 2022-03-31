import React, { FC } from 'react';
import { colors, FontSize } from 'src/common/dictionaries';
import { Anchor, P } from 'src/components/atoms';
import styled from 'styled-components';
import { useTheme } from 'next-themes';
import { Github, Telegram } from 'src/components/atoms/icons';
import { Props } from './props';

const Wrapper = styled.footer`${({ backgroundColor }: Props) => `
    background: ${backgroundColor};
    height: 200px;
    `}`;

export const Footer:FC = () => {
    const { theme } = useTheme()
    return (
    <Wrapper className='mt-5' backgroundColor={theme === 'light' ? colors.shades.light.light300 : colors.shades.dark.dark400 }>
            <div className='container d-flex flex-column justify-content-center '>
                <div className='d-flex justify-content-center my-4'>
                    <Anchor 
                    color={theme === 'dark' ? colors.text.primary : colors.text.secondary}
                    href="#">↑ Back to top</Anchor>
                </div>
                <div className='d-flex justify-content-center mt-2'>
                <Anchor target='_blank' href='https://github.com/2halgas'><Github className='mx-2' /></Anchor>
                <Anchor target='_blank' href='https://t.me/ZhalgasKhamidulla'><Telegram className='mx-2' /></Anchor>
                </div>
                <div className='mt-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between col-12'>
                <P
                fontSize={FontSize.Medium}
                className="col-12 col-sm-3 text-center"
                    color={theme === 'dark' ? colors.text.primary : colors.text.secondary}
                >
                    Fullstack Developer
                </P>
                <P
                fontSize={FontSize.Medium}
                className="col-12 col-sm-3 text-center"
                    color={theme === 'dark' ? colors.text.primary : colors.text.secondary}
                >
                    Designed by Zhalgas
                </P>
                <P
                fontSize={FontSize.Medium}
                    className="col-12 col-sm-3 text-center"
                    color={theme === 'dark' ? colors.text.primary : colors.text.secondary}
                >
                    {`Khamidulla Zhalgas ${new Date().getFullYear()}`}
                </P>
                </div>
            </div>
    </Wrapper>
)};
