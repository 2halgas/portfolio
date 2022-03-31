import React, { FC } from 'react';
import styled from 'styled-components';
import { Props } from './props';
import { FontSize, LineHeight } from 'src/common/dictionaries';
import { colors } from 'src/common/dictionaries/colors';
import { TextAttributes } from 'src/common/types';
import { StyledUtils } from 'src/common/utils';

const StyledAnchor = styled.a`
${({
        color,
        fontSize,
        fontWeight,
        lineHeight,
        hoverColor,
        blank,
    }: TextAttributes) => `
  ${StyledUtils.createTextTemplate({
        color, fontSize, fontWeight, lineHeight, blank,
    })}
  cursor: pointer;
  text-decoration: none;
  transition: ${color} 0.2s linear;
    :hover {
      color: ${hoverColor};
    };
    :visited {
    color: ${color || colors.text.primary};
    };
    :link {
    color: ${color || colors.text.primary};
    };
`}
`;

export const Anchor: FC<Props> = ({
    color,
    blank,
    hoverColor,
    fontWeight = 400,
    fontSize = FontSize.Small,
    lineHeight = LineHeight.Small,
    ...rest
}: Props) => (
    <StyledAnchor
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color || colors.text.primary}
        hoverColor={hoverColor || colors.shades.dark.dark200}
        target={blank ? '_blank' : '_self'}
        {...rest}
    />
);
