import React, { FC } from 'react';
import styled from 'styled-components';
import {
    colors, FontSize, LineHeight,
} from 'src/common/dictionaries';

import { ButtonUtils, StyledUtils } from 'src/common/utils';

import { Props } from './props';

const StyledButton = styled.button`
${({
        button,
        backgroundColor,
        borderColor,
        color,
        fontSize,
        fontWeight,
        lineHeight,
        disabled,
        size,
        borderRadius,
        hoverColor,
        hoverBackgroundColor,
    }: Props) => `
  ${StyledUtils.createTextTemplate({
        color,
        fontSize,
        fontWeight,
        lineHeight,
    })}

  border-radius: ${borderRadius};
  cursor: ${disabled ? 'unset' : 'pointer'};
  transition: all 0.2s linear;
  outline: none;

  ${button === 'primary' ? `
    border: 1px solid transparent;
    background-color: ${backgroundColor};
    color: ${color || colors.text.primary};
    padding: ${ButtonUtils.getButtonSize(size || 'md')};

    :hover {
      color: ${hoverColor || colors.text.primary};
      background-color: ${hoverBackgroundColor || colors.branding.primary300};
    }
  ` : ''}

  ${button === 'outline' ? `
    background-color: transparent;
    color: ${color || colors.text.primary};
    border: 1px solid ${borderColor};
    padding: ${ButtonUtils.getButtonSize(size || 'md')};
    
    :hover {
      border: 1px solid ${colors.branding.primary300};
    }
  ` : ''}

  ${button === 'link' ? `
    border: 1px solid transparent;
    background-color: transparent;
    border-radius: 0;
    color: ${color || colors.text.primary};
    padding: ${ButtonUtils.getButtonSize(size || 'sm')};

    :hover {
      color: ${hoverColor || colors.text.primary};
    }
  ` : ''}
  
  ${disabled ? `
    opacity: 0.48;
  ` : ''}
`}
`;

export const Button: FC<Props> = ({
    type = 'button',
    button = 'primary',
    fontSize = FontSize.Large,
    lineHeight = LineHeight.Large,
    fontWeight = 500,
    backgroundColor = colors.branding.main,
    borderColor = colors.branding.primary200,
    borderRadius = '6px',
    ...rest
}: Props) => (
    <StyledButton
        backgroundColor={backgroundColor}
        fontSize={fontSize}
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        type={type}
        button={button}
        borderColor={borderColor}
        borderRadius={borderRadius}
        {...rest}
    />
);
