import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../theme/theme';

interface DividerProps {
  alignment?: 'horizontal' | 'vertical';
}
export const Divider: React.FC<DividerProps> = ({alignment = 'horizontal'}) => {
  return (
    <View
      style={
        alignment === 'horizontal'
          ? styles.dividerHorizontal
          : styles.dividerVertical
      }
    />
  );
};

const styles = StyleSheet.create({
  dividerHorizontal: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.borderGrey,
    opacity: 0.2,
  },
  dividerVertical: {
    width: 1,
    height: '100%',
    backgroundColor: COLORS.borderGrey,
    opacity: 0.2,
  },
});
