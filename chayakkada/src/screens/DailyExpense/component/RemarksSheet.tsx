import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../../../theme/theme';

interface RemarksSheet {
  cashAmount?: number;
  remarks?: string;
}
export const RemarksSheet = () => {
  return (
    <View>
      <Text style={styles.remarksHeader}>Remarks Sheet</Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  remarksHeader: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryBlackHex,
  },
});
