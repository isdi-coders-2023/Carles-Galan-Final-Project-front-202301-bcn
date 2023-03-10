import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainFont: string;
    secondaryFont: string;
    colors: {
      mainColor: string;
    };
    borderRadius: string;
  }
}
