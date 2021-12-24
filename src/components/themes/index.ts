import { DefaultTheme } from 'styled-components'

type themeTypes = 'light' | 'dark'
  
declare module "styled-components" {
  export interface DefaultTheme {
    type: themeTypes, 
    primaryColor: string;
    secondaryColor: string;
    background: string;
    backgroundContrast: string;
    fontColor:  string;
  }
}


export const lightTheme : DefaultTheme = {
  type: 'light',
  primaryColor: '#f8049c',
  secondaryColor: '#fdd54f',
  background: 'white',
  backgroundContrast: '#eee',
  fontColor: 'black'
} 

export const darkTheme : DefaultTheme = {
  type: 'dark',
  primaryColor: 'black',
  secondaryColor: 'midnightblue',
  background: '#1f1f1f',
  backgroundContrast: '#404040',
  fontColor: 'white'
} 