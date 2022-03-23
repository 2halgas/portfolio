import React, { FC } from 'react';
import { FontSize, FontWeight, LineHeight } from 'src/common/dictionaries';
import { colors } from 'src/common/dictionaries/colors';
import { TextAttributes } from 'src/common/types';
import { StyledUtils } from 'src/common/utils';
import styled from 'styled-components';

import { Props } from './props';

const StyledH4 = styled.h4`
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

export const H4: FC<Props> = ({
    color,
    fontWeight = FontWeight.Bold,
    fontSize = FontSize.H4,
    lineHeight = LineHeight.H4,
    ...rest
}: Props) => (
    <StyledH4
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color || colors.text.primary}
        {...rest}
    />
);
