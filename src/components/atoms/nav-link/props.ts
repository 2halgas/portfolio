import { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import { TextAttributes } from "src/common/types";

export type Props = LinkProps & TextAttributes &
  AnchorHTMLAttributes<HTMLAnchorElement> &
{
  emphasized?: boolean;
  useTransparentEmphasis?: boolean;
  hoverColor?: string;
};
