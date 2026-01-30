import styled, { css } from "styled-components";
import { TextElements, device, theme } from "@/consts";

interface TextProps {
  $element: TextElements;
}

function textColor({ $element }: TextProps) {
  switch ($element) {
    case TextElements.H1:
      return theme.primaryText;
    case TextElements.H2:
      return theme.secondaryText;
    case TextElements.H3:
      return theme.secondaryText;
    case TextElements.H4:
      return theme.secondaryText;
    case TextElements.P1:
      return theme.secondaryText;
    case TextElements.P2:
      return theme.primaryText;
    case TextElements.P3:
      return theme.tertiaryText;
    case TextElements.P4:
      return theme.secondaryText;
    case TextElements.P5:
      return theme.tertiaryText;
    default:
      return theme.secondaryText;
  }
}

const getWeight = ({ $element }: TextProps) => {
  switch ($element) {
    case TextElements.H1:
      return 500;
    case TextElements.H2:
      return 500;
    case TextElements.H3:
      return 500;
    case TextElements.H4:
      return 500;
    default:
      return 400;
  }
};

const flexFont = css`
  font-family: "Roboto Flex", sans-serif;
`;

const slabFont = css`
  font-family: "Roboto Slab", serif;
`;

const styles = css<TextProps>`
  display: inline-flex;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: ${getWeight};
  color: ${textColor};
`;

export const H1 = styled.h1<TextProps>`
  font-size: 80px;
  ${slabFont};
  ${styles};
  ${device.laptop} {
    font-size: 48px;
  }
`;

export const H2 = styled.h2<TextProps>`
  font-size: 60px;
  ${slabFont};
  ${styles};
  ${device.laptop} {
    font-size: 36px;
  }
`;

export const H3 = styled.h3<TextProps>`
  font-size: 36px;
  ${slabFont};
  ${styles};
  ${device.laptop} {
    font-size: 24px;
  }
`;

export const H4 = styled.h4<TextProps>`
  font-size: 30px;
  ${flexFont};
  ${styles};
  ${device.laptop} {
    font-size: 24px;
  }
`;

export const P1 = styled.p<TextProps>`
  font-size: 24px;
  ${flexFont};
  ${styles};
  ${device.laptop} {
    font-size: 36px;
  }
`;

export const P2 = styled.p<TextProps>`
  font-size: 24px;
  ${flexFont};
  ${styles};
  ${device.laptop} {
    font-size: 20px;
  }
`;

export const P3 = styled.p<TextProps>`
  font-size: 24px;
  ${flexFont};
  ${styles};
  ${device.laptop} {
    font-size: 20px;
  }
`;

export const P4 = styled.p<TextProps>`
  font-size: 24px;
  ${flexFont};
  ${styles};
  ${device.laptop} {
    font-size: 20px;
  }
`;

export const P5 = styled.p<TextProps>`
  font-size: 20px;
  ${flexFont};
  ${styles};
  ${device.laptop} {
    font-size: 16px;
  }
`;
