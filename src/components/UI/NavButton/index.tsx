import type { PropsWithChildren } from "react";
import { Button } from "./styles";
import { Link } from "react-router";

interface ButtonProps {
  to: string;
  isActive?: boolean;
  isScroll?: boolean;
  isAnchor?: boolean;
}

export const NavButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  to,
  isActive,
  isScroll,
  isAnchor,
  children,
}) => {
  return (
    <Button $active={isActive} $scroll={isScroll}>
      {isAnchor ? <a href={to}>{children}</a> : <Link to={to}>{children}</Link>}
    </Button>
  );
};
