import type { PropsWithChildren } from "react";
import { Wrapper } from "./styles";
import type { Directions } from "@/consts";

interface RowProps {
  direction: Directions;
}

export const Row: React.FC<PropsWithChildren<RowProps>> = ({
  children,
  direction,
}) => {
  return <Wrapper $direction={direction}>{children}</Wrapper>;
};
