import { StaticImageData } from "next/image";
import { ButtonHTMLAttributes } from "react";

type CustomButtonProps =
  | { text: string; ariaLabel?: never; icon?: never }
  | {
      ariaLabel: string;
      icon: StaticImageData;
      text?: never;
    };

export type ButtonProps = CustomButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
