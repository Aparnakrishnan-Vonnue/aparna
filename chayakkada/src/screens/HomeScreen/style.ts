import {StyleSheet} from 'react-native';
import {FONTSIZE, FONT_FAMILY, COLORS} from '../../theme/theme';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primaryWhiteHex,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  lottie: {
    flex: 1,
    width: 200,
  },
  headerNav: {
    padding: 15,
    backgroundColor: COLORS.earthenBrown,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.poppins_black,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryWhiteHex,
    fontStyle: 'italic',
  },

});
