import {createTheme} from '@shopify/restyle';

const palette = {
  greenPrimary: '#074C4E',
  greenPrimaryLight: '#EAF6F6',
  carrotSecondary: '#F86F2D',
  carrotSecondaryLight: '#FAE6DD',
  greenSuccess: '#4ABC86',
  greenSuccessLight: '#D8FFEC',
  redError: '#EA3838',
  redErrorLight: '#FBECEC',

  greyBlack: '#000',
  grey1: '#636363',
  grey2: '#8E8E8E',
  grey3: '#B3B3B3',
  grey4: '#E1E1E1',
  grey5: '#F5F5F5',
  greyWhite: '#FFF',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.greenPrimary,
    primaryContrast: palette.greyWhite,

    buttonPrimary: palette.greenPrimary,

    background: palette.greyWhite,
    backgroundContrast: palette.greyBlack,

    error: palette.redError,
    errorLight: palette.redErrorLight,

    success: palette.greenSuccess,
    successLight: palette.greenSuccessLight,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },
});

export type Theme = typeof theme;
