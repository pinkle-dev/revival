import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.secondaryBg};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
