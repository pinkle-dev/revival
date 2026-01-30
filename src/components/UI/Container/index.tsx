import type { PropsWithChildren } from "react";
import { Wrapper } from "./styles";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
