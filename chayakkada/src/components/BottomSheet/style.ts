import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';

export const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  contentContainer: {
    backgroundColor: COLORS.creamyWhite,
    paddingTop: FONTSIZE.size_24,
    paddingHorizontal: FONTSIZE.size_24,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 20,
    minHeight: 300,
    paddingBottom: 20,
  },
});
