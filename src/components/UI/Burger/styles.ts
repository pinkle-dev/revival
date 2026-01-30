import styled from "styled-components";

export const Burger = styled.div<{ $open: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  svg {
    transform: ${({ $open }) => ($open ? "rotate(270deg)" : "rotate(90deg)")};
    width: 30px;
    height: 30px;
    transition: 0.3s;
    path {
      fill: ${({ theme }) => theme.secondaryBg};
    }
  }
`;
