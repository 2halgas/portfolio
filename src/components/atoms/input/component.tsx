import React, { FC } from 'react';
import { FontSize, LineHeight } from 'src/common/dictionaries';
import { colors } from 'src/common/dictionaries/colors';
import { TextAttributes } from 'src/common/types';
import { StyledUtils } from 'src/common/utils';
import styled from 'styled-components';
import { Props } from './props';

const StyledInput = styled.input`
${({
        color,
        fontSize,
        fontWeight,
        lineHeight,
    }: TextAttributes) => `
  ${StyledUtils.createTextTemplate({
        color, fontSize, fontWeight, lineHeight,
    })}

    width: 190px;
  height: 40px;
  padding: 15px;
  background-color: ${colors.shades.dark.dark300};
  border-radius: 5px;
  border: 1px solid ${colors.shades.dark.dark100};
  transition: all 0.2s linear;
  -webkit-appearance: none;
  
  ::placeholder {
    color: white;
    opacity: 1;
}

  :focus {
    outline: 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: ${colors.shades.dark.dark600};
  }
`}
`;

export const Input: FC<Props> = ({
    color,
    fontWeight = 400,
    fontSize = FontSize.Small,
    lineHeight = LineHeight.Small,
    ...rest
}: Props) => (
  <>
    <StyledInput
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color || colors.text.primary}
        {...rest}
    />
  </>
);
