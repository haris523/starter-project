export const themes = {
  visiotTheme: {
    primary: "#1A72A5",
    secondary: "white",
  },
  purple: {
    primary: "purple",
    secondary: "white",
  },
};

export enum Themes {
  visiotTheme = "visiotTheme",
  purple = "purple",
}

export enum ThemeAttributes {
  primary = "primary",
  secondary = "secondary",
}

export type ThemeType = "visiotTheme" | "purple";
