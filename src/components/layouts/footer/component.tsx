import React, { FC, useEffect, useState } from 'react';
import { colors, FontSize } from 'src/common/dictionaries';
import { Anchor, P } from 'src/components/atoms';
import styled from 'styled-components';
import { useTheme } from 'next-themes';
import { Github, Telegram } from 'src/components/atoms/icons';
import { Props } from './props';
import Wave from 'react-wavify'
import { useMediaQuery } from 'src/common/hooks/use-media-query';

const Wrapper = styled.footer`${({ backgroundColor }: Props) => `
background: ${backgroundColor}
    `}`;

export const Footer:FC = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const isSmallDevice = useMediaQuery(600);

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (<Wrapper className='mt-5' backgroundColor={theme === 'light' ? colors.shades.light.light300 : colors.shades.dark.dark400 }>

            <div className='container d-flex flex-column justify-content-center '>
                <div className='d-flex justify-content-center my-4'>
                    <Anchor
                    color={theme === 'light' ? colors.text.secondary : colors.text.primary}
                    href="#">↑ Back to top</Anchor>
                </div>
                <div className='d-flex justify-content-center mt-2'>
                <Anchor target='_blank' href='https://github.com/2halgas'><Github className='mx-2' /></Anchor>
                <Anchor target='_blank' href='https://t.me/ZhalgasDev'><Telegram className='mx-2' /></Anchor>
                </div>
                <div className='mt-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between col-12'>
                <P
                fontSize={FontSize.Medium}
                className="col-12 col-sm-3 text-center"
                    color={theme === 'light' ? colors.text.secondary : colors.text.primary}
                >
                    Web Developer
                </P>
                <P
                fontSize={FontSize.Medium}
                className="col-12 col-sm-3 text-center"
                color={theme === 'light' ? colors.text.secondary : colors.text.primary}
                >
                    Designed by Zhalgas
                </P>
                <P
                fontSize={FontSize.Medium}
                    className="col-12 col-sm-3 text-center"
                    color={theme === 'light' ? colors.text.secondary : colors.text.primary}
                >
                    {`${new Date().getFullYear()}`}
                </P>
                </div>
            </div>
    <Wave fill={theme === 'light' ? colors.shades.dark.dark400 : colors.shades.light.light400 }
        paused={false}
        options={isSmallDevice ? {
            height: 50,
            amplitude: 60,
            speed: 0.1,
            points: 2
          } :{
          height: 30,
          amplitude: 100,
          speed: 0.15,
          points: 5
        }}
  />
    </Wrapper>

)};
