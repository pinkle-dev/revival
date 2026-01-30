import type { PropsWithChildren } from "react";
import { ButtonVariants } from "@/consts";
import { FilledButton, LinkButton, GhostButton } from "./styles";

interface ButtonProps {
  variant: ButtonVariants;
  callback?: () => void;
  className?: string;
  to?: string;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  to,
  variant,
  children,
  callback,
  className,
}) => {
  switch (variant) {
    case ButtonVariants.FILLED:
      return (
        <FilledButton onClick={callback}>
          {to ? <a href={to}>{children}</a> : children}
        </FilledButton>
      );
    case ButtonVariants.GHOST:
      return (
        <GhostButton className={className} onClick={callback}>
          {children}
        </GhostButton>
      );
    default:
      return <LinkButton to={to || ""}>{children}</LinkButton>;
  }
};
