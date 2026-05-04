import type { PropsWithChildren } from "react";
import { ButtonVariants } from "@/consts";
import { FilledButton, LinkButton, GhostButton } from "./styles";

interface ButtonProps {
  variant: ButtonVariants;
  callback?: () => void;
  className?: string;
  to?: string;
  isBlank?: boolean;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  to,
  variant,
  children,
  callback,
  isBlank,
  ...props
}) => {
  switch (variant) {
    case ButtonVariants.FILLED:
      return (
        <FilledButton {...props} onClick={callback}>
          {to ? (
            <a href={to} target={isBlank ? "_blank" : ""}>
              {children}
            </a>
          ) : (
            children
          )}
        </FilledButton>
      );
    case ButtonVariants.GHOST:
      return (
        <GhostButton {...props} onClick={callback}>
          {children}
        </GhostButton>
      );
    default:
      return (
        <LinkButton {...props} to={to || ""}>
          {children}
        </LinkButton>
      );
  }
};
