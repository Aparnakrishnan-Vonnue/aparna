import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTSIZE, FONT_FAMILY} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';

const getScreenIcon = () => {
  return (
    <Icon
      name="angle-left"
      color={COLORS.primaryWhiteHex}
      size={FONTSIZE.size_24}
    />
  );
};

interface ScreeHeaderProps {
  title: string;
}

const ScreenHeader = ({title}: ScreeHeaderProps) => {
  const navigation = useNavigation<RootStackNavigationProps>();
  return (
    <View style={styles.screenHeader}>
      <View style={styles.screenChildren}>
        <Pressable
          onPress={() => navigation.navigate('HOME')}
          style={styles.leadingIconBg}>
          {getScreenIcon()}
        </Pressable>
        <Text style={styles.titleText}>{title}</Text>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenHeader: {
    backgroundColor: COLORS.neutralGray,
    padding: 10,
  },
  screenChildren: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leadingIconBg: {
    padding: 5,
  },
  titleText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONT_FAMILY.poppins_regular,
    fontSize: FONTSIZE.size_20,
  },
});
export default ScreenHeader;
