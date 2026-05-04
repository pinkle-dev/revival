import { Button } from "@/components/UI";
import { device } from "@/consts";
import styled from "styled-components";

export const Wrapper = styled.header<{ $scroll: boolean; $show: boolean }>`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 80px;
  background: ${({ theme, $scroll }) =>
    $scroll ? theme.secondaryBg : "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s;
  ${device.laptop} {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LanguageButton = styled(Button)<{
  $scroll?: boolean;
}>`
  width: max-content;
  font-size: 20px;
  padding: 0;
  color: ${({ theme, $scroll }) =>
    $scroll ? theme.secondaryText : theme.primaryText};
  background: none;
  position: relative;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  &::after {
    background: ${({ theme, $scroll }) =>
      $scroll ? theme.secondaryText : theme.primaryText};
  }
`;
