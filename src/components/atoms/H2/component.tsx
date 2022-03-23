import React, { FC } from 'react';
import { FontSize, FontWeight, LineHeight } from 'src/common/dictionaries';
import { colors } from 'src/common/dictionaries/colors';
import { TextAttributes } from 'src/common/types';
import { StyledUtils } from 'src/common/utils';
import styled from 'styled-components';

import { Props } from './props';

const StyledH2 = styled.h2`
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

export const H2: FC<Props> = ({
    color,
    fontWeight = FontWeight.Bold,
    fontSize = FontSize.H2,
    lineHeight = LineHeight.H2,
    ...rest
}: Props) => (
    <StyledH2
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color || colors.text.primary}
        {...rest}
    />
);
