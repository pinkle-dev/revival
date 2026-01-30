import type { PropsWithChildren } from "react";
import { Burger } from "./styles";

interface BurgerProps {
  isActive: boolean;
  callback: () => void;
}

export const BurgerButton: React.FC<PropsWithChildren<BurgerProps>> = ({
  isActive,
  callback,
  children,
}) => {
  return (
    <Burger $open={isActive} onClick={callback}>
      {children}
    </Burger>
  );
};
