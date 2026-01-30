import type { PropsWithChildren } from "react";
import { DividerWrapper } from "./styles";

interface DividerProps {
  mobVertical?: number;
  mobHorizontal?: number;
  desktopVertical?: number;
  desktopHorizontal?: number;
}

export const Divider: React.FC<PropsWithChildren<DividerProps>> = ({
  mobVertical,
  mobHorizontal,
  desktopVertical,
  desktopHorizontal,
}) => {
  return (
    <DividerWrapper
      $mobVertical={mobVertical}
      $mobHorizontal={mobHorizontal}
      $desktopVertical={desktopVertical}
      $desktopHorizontal={desktopHorizontal}
    />
  );
};
