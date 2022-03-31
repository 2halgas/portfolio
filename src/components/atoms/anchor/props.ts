import { AnchorHTMLAttributes, RefAttributes } from 'react';
import { TextAttributes } from 'src/common/types';

export type Props = AnchorHTMLAttributes<HTMLAnchorElement>
  & TextAttributes
  & RefAttributes<HTMLAnchorElement> & {
    hoverColor?: string;
  };
