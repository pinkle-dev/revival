import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryText: string;
    secondaryText: string;
    tertiaryText: string;
    quaternaryText: string;
    primaryBg: string;
    secondaryBg: string;
    tertiaryBg: string;
    quaternaryBg: string;
    quinaryBg: string;
  }
}
