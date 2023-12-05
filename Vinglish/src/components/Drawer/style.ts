import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/colors';
import {DefaultFontFamily, FONTSIZES} from '../../themes/font';

export const style = StyleSheet.create({
  drawerContainer: {
    backgroundColor: COLORS.secondary,
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
    // color: COLORS.primaryGreyHex,
    fontSize: FONTSIZES.md,
    fontFamily: DefaultFontFamily,
  },
});
