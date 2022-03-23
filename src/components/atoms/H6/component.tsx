import React, { FC } from 'react';
import { FontSize, FontWeight, LineHeight } from 'src/common/dictionaries';
import { colors } from 'src/common/dictionaries/colors';
import { TextAttributes } from 'src/common/types';
import { StyledUtils } from 'src/common/utils';
import styled from 'styled-components';

import { Props } from './props';

const StyledH6 = styled.h6`
${({
        color,
        fontSize,
        fontWeight,
        lineHeight,
    }: TextAttributes) => `
  ${StyledUtils.createTextTemplate({
        color, fontSize, fontWeight, lineHeight,
    })}
`}
`;

export const H6: FC<Props> = ({
    color,
    fontWeight = FontWeight.Bold,
    fontSize = FontSize.H6,
    lineHeight = LineHeight.H6,
    ...rest
}: Props) => (
    <StyledH6
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color || colors.text.primary}
        {...rest}
    />
);
