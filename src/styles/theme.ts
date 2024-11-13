export interface ThemeTypes {
  background: string;
  boardBlack: string;
  boardBorder: string;
  boardWhite: string;
  highlight: string;
  pieceBlack: string;
  pieceWhite: string;
  text: string;
}

/* These are the colors we will use within our themes. No other color should be within the CSS unless it is a permanant white or black (as they are shades). */
/* In this small instance this object is overkill, but would allow for scalability in regards to multiple themes. */

/** Colors to be used within theme objects. */
const colors = {
  black: '#000000',
  chessComBg: '#312E2B',
  chessComGreen: '#769656',
  chessComHighlight: '#FFFF8F',
  chessComOffWhite: '#EEEED2',
  white: '#ffffff',
  zacWood: '#664433',
};

/* This is the theme object from which all usage is drawn from. By Creating multiple theme objects you can quickly change the style of the entire application. */

/** Default theme object, all styles should pull from here. */
export const theme: ThemeTypes = {
  background: colors.chessComBg,
  boardBlack: colors.chessComGreen,
  boardBorder: colors.zacWood,
  boardWhite: colors.chessComOffWhite,
  highlight: colors.chessComHighlight,
  pieceBlack: colors.black,
  pieceWhite: colors.white,
  text: colors.white,
};