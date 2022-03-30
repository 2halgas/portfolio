import React, { FC } from 'react';

import { FontSize, FontWeight, LineHeight } from 'src/common/dictionaries';
import { colors } from 'src/common/dictionaries/colors';
import { TextAttributes } from 'src/common/types';
import { StyledUtils } from 'src/common/utils';
import styled from 'styled-components';
import { Props } from './props';

const StyledP = styled.p`
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

export const P: FC<Props> = ({
    color,
    fontWeight = FontWeight.Regular,
    fontSize = FontSize.Medium,
    lineHeight = LineHeight.H5,
    ...rest
}: Props) => (
    <StyledP
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color || colors.text.primary}
        {...rest}
    />
);
