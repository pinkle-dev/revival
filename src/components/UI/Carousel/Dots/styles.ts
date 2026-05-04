import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
  list-style: none;
`;

export const Dot = styled.li<{ $active: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background: ${({ theme, $active }) =>
    $active ? theme.tertiaryBg : theme.quaternaryBg};
  cursor: pointer;
  transition: background 0.3s;
`;
