import type { PropsWithChildren } from "react";
import { H1, H2, H3, H4, P1, P2, P3, P4, P5 } from "./styles";
import { TextElements } from "@/consts";

interface TextProps {
  element: TextElements;
  className?: string;
}

export const Text: React.FC<PropsWithChildren<TextProps>> = ({
  children,
  element,
  ...props
}) => {
  switch (element) {
    case TextElements.H1:
      return (
        <H1 $element={element} {...props}>
          {children}
        </H1>
      );
    case TextElements.H2:
      return (
        <H2 $element={element} {...props}>
          {children}
        </H2>
      );
    case TextElements.H3:
      return (
        <H3 $element={element} {...props}>
          {children}
        </H3>
      );
    case TextElements.H4:
      return (
        <H4 $element={element} {...props}>
          {children}
        </H4>
      );
    case TextElements.P1:
      return (
        <P1 $element={element} {...props}>
          {children}
        </P1>
      );
    case TextElements.P2:
      return (
        <P2 $element={element} {...props}>
          {children}
        </P2>
      );
    case TextElements.P3:
      return (
        <P3 $element={element} {...props}>
          {children}
        </P3>
      );
    case TextElements.P4:
      return (
        <P4 $element={element} {...props}>
          {children}
        </P4>
      );
    default:
      return (
        <P5 $element={element} {...props}>
          {children}
        </P5>
      );
  }
};
