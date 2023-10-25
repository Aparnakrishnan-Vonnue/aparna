interface Color {
  earthyGreen: string;
  earthenBrown: string;
  creamyWhite: string;
  goldenYellow: string;
  lavender: string;
  neutralGray: string;
  woodenBrown: string;
  aqua: string;
  teaLeafGreen: string;
}

export const COLORS = {
  earthyGreen: ' #6B8E23',
  earthenBrown: '#8B4513',
  creamyWhite: '#F5F5F5',
  goldenYellow: '#FFD700',
  lavender: ' #E6E6FA',
  neutralGray: '#808080',
  woodenBrown: '#964B00',
  aqua: '#008B8B',
  teaLeafGreen: '#556B2F',
  primaryBlackHex: '#0C0F14',
  primaryGreyHex: '#252A32',
  primaryWhiteHex: '#FFFFFF',
  borderGrey: '#C0C2C9',
};

interface FontFamily {
  poppins_black: string;
  poppins_bold: string;
  poppins_extrabold: string;
  poppins_extralight: string;
  poppins_light: string;
  poppins_medium: string;
  poppins_regular: string;
  poppins_semibold: string;
  poppins_thin: string;
}

export const FONT_FAMILY = {
  poppins_black: 'Poppins-Black',
  poppins_bold: 'Poppins-Bold',
  poppins_extrabold: 'Poppins-ExtraBold',
  poppins_extralight: 'Poppins-ExtraLight',
  poppins_light: 'Poppins-Light',
  poppins_medium: 'Poppins-Medium',
  poppins_regular: 'Poppins-Regular',
  poppins_semibold: 'Poppins-SemiBold',
  poppins_thin: 'Poppins-Thin',
};

interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_28: number;
  size_30: number;
}

export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_28: 28,
  size_30: 30,
};

interface BorderRadius {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
}

export const BORDERRADIUS: BorderRadius = {
  radius_4: 4,
  radius_8: 8,
  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
  radius_25: 25,
};
