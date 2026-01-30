import { device } from "@/consts";
import styled from "styled-components";

export const Button = styled.button<{
  $active?: boolean;
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

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  &::before {
    display: ${({ $active }) => ($active ? "block" : "none")};
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: ${({ theme, $scroll }) =>
      $scroll ? theme.secondaryText : theme.primaryText};
    position: absolute;
    top: -10px;
    left: calc(50% - 4px);
  }
  &::after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background: ${({ theme, $scroll }) =>
      $scroll ? theme.secondaryText : theme.primaryText};
    bottom: -6px;
    left: 0;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }

  ${device.laptop} {
    color: ${({ theme }) => theme.secondaryText};
    &::before {
      background: ${({ theme }) => theme.secondaryText};
      top: calc(50% - 4px);
      left: -20px;
    }

    &::after {
      display: none;
    }
  }
`;
