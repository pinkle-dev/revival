import { device } from "@/consts";
import { Link } from "react-router";
import styled from "styled-components";

export const Wrapper = styled.aside`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
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
