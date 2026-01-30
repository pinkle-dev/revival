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
    background: ${({ theme }) => theme.secondaryBg};
    height: 80vh;
    bottom: ${({ $show }) => ($show ? 0 : "-100%")};
    top: auto;
    border-radius: 48px 48px 0 0;
    display: flex;
    flex-direction: column;
    padding: 40px 20px 120px;
    transition: 0.5s;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${device.laptop} {
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    gap: 24px;
  }
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
  ${device.laptop} {
    color: ${({ theme }) => theme.secondaryText};
  }
`;

export const ScheduleWrapper = styled.div`
  display: none;
  ${device.laptop} {
    display: flex;
    width: 100%;
  }
`;
