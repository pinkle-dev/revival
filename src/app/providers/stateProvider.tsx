import type { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

export const StateProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <RecoilRoot>{children}</RecoilRoot>
);
