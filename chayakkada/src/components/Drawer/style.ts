import {StyleSheet} from 'react-native';
import {FONTSIZE, FONT_FAMILY, COLORS} from '../../theme/theme';

export const style = StyleSheet.create({
  drawerContainer: {
    backgroundColor: COLORS.creamyWhite,
    height: '100%',
    width: '50%',
    elevation: 5,
  },
  drawerNotVisible: {
    display: 'none',
  },
  navItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    elevation: 5,
  },
  navText: {
    color: COLORS.primaryGreyHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONT_FAMILY.poppins_medium,
  },
});
