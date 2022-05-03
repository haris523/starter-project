import { ThemeContextProps } from './ThemeContext'

//TODO: FIRSTLY, ADD THE NAME OF YOUR THEME TO Themes enum, and then to Theme type with | "themeName"
export enum Themes {
    visiotTheme = 'visiotTheme',
    purple = 'purple'
}
export type ThemeType = 'visiotTheme' | 'purple'

//TODO: ADD ALL OF THE COLORS YOU WANT TO HAVE IN YOUR THEME
export enum ThemeAttributes {
    primary = 'primary',
    secondary = 'secondary'
}

//TODO: ADD YOUR THEMES INSIDE THE themes object, TYPESCRIPT WILL WARN YOU IF YOU MESS UP
export const themes: ThemeContextProps = {
    visiotTheme: {
        primary: '#1A72A5',
        secondary: 'white'
    },
    purple: {
        primary: 'purple',
        secondary: 'white'
    }
}
