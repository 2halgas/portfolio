import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { colors, FontSize, LineHeight, } from 'src/common/dictionaries';
import { TextAttributes, } from 'src/common/types';
import { StyledUtils, } from 'src/common/utils';
import { Props } from './props';

const LinkAnchor = styled.a`
    ${({
        color,
        fontSize,
        fontWeight,
        lineHeight,
        hoverColor,
    }: TextAttributes) => `
    ${StyledUtils.createTextTemplate({
        color,
        fontWeight,
        fontSize,
        lineHeight,
    })}
    transition: all 0.2s linear;
    text-decoration: none;

    :hover {
        color: ${hoverColor};
    }
`}
`;

export const NavLink = ({
    href,
    as,
    locale,
    prefetch,
    replace,
    scroll,
    shallow,
    passHref = true,
    fontWeight = 400,
    fontSize = FontSize.Large,
    hoverColor = colors.shades.light.light600,
    lineHeight = LineHeight.Large,
    color,
    children,
    blank,
    ...rest
}: Props) => (
    <Link 
    passHref={passHref}
    href={href}
    as={as}
    locale={locale}
    prefetch={prefetch}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    >
        <LinkAnchor
            target={blank ? '_blank' : '_self'}
            color={color}
            fontWeight={fontWeight}
            fontSize={fontSize}
            hoverColor={hoverColor}
            lineHeight={lineHeight}
            {...rest}
        >
            {children}
        </LinkAnchor>
    </Link>
);
