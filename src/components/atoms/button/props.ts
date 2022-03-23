import { ButtonHTMLAttributes } from 'react';
import { TextAttributes, ButtonSizeUnion, ButtonUnion } from 'src/common/types';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> &
TextAttributes &
{
  button?: ButtonUnion;
  size?: ButtonSizeUnion;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  borderColor?: string;
  borderRadius?: string;
};
