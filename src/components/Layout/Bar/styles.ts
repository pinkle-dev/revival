import { device } from "@/consts";
import { Link } from "react-router";
import { Button } from "@/components/UI";
import styled from "styled-components";

export const Wrapper = styled.aside`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 12;
  width: calc(100% - 40px);
  height: 70px;
  padding: 0 10px;
  background: ${({ theme }) => theme.quinaryBg};
  border-radius: 60px;
  display: none;
  justify-content: space-around;
  align-items: center;
  ${device.laptop} {
    display: flex;
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export const NavText = styled.span`
  transform: scale(0);
  transition: 0.3s;
  font-family: inherit;
`;

export const LinkButton = styled(Link)<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme, $active }) =>
    $active ? theme.primaryBg : theme.quinaryBg};
  color: ${({ theme, $active }) =>
    $active ? theme.quaternaryText : theme.primaryText};
  padding: ${({ $active }) => ($active ? "15px 20px" : 0)};
  width: max-content;
  height: 50px;
  background: ${({ theme, $active }) =>
    $active ? theme.primaryBg : theme.quinaryBg};
  border-radius: 60px;
  transition: 0.3s;
  position: relative;

  & svg {
    width: ${({ $active }) => ($active ? "24px" : "30px")};
    height: ${({ $active }) => ($active ? "24px" : "30px")};
    path,
    circle {
      fill: ${({ theme, $active }) =>
        $active ? theme.quinaryBg : theme.primaryBg};
    }
  }
  & ${NavText} {
    transform: ${({ $active }) => ($active ? "scale(1)" : "scale(0)")};
    display: ${({ $active }) => ($active ? "inline-block" : "none")};
    color: ${({ theme, $active }) =>
      $active ? theme.quaternaryText : theme.primaryText};
    margin-left: 10px;
  }
`;

export const Background = styled.div<{ $show: boolean }>`
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  bottom: 0;
  top: auto;
  background: ${({ theme }) => theme.secondaryText};
  z-index: 12;
  opacity: 0.7;
  ${device.laptop} {
    display: ${({ $show }) => ($show ? "flex" : "none")};
  }
`;

export const NavWrapper = styled.header<{ $scroll: boolean; $show: boolean }>`
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  position: fixed;
  top: auto;
  bottom: ${({ $show }) => ($show ? 0 : "-100%")};
  z-index: 12;
  width: 100%;
  height: max-content;
  background: ${({ theme }) => theme.secondaryBg};

  border-radius: 48px 48px 0 0;
  padding: 40px 20px 120px;
  transition: 0.5s;
  ${device.laptop} {
    display: flex;
  }
`;

export const Container = styled.div<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 0 70px;
  ${device.laptop} {
    height: auto;
  }
`;

export const LanguageButton = styled(Button)<{
  $scroll?: boolean;
  $open?: boolean;
}>`
  display: ${({ $open }) => ($open ? "flex" : "none")};
  z-index: 1;
  width: max-content;
  font-size: 20px;
  padding: 0;
  color: ${({ theme }) => theme.secondaryText};
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
