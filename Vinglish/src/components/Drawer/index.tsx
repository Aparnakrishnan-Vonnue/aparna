import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {style} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {sideNavData, SideNavItems} from '../../data/sideNavData';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';
import {FONTSIZES} from '../../themes/font';
import {Divider} from '../Divider';
import {COLORS} from '../../themes/colors';

interface DrawerProps {
  isOpen: boolean;
}
const Drawer = ({isOpen}: DrawerProps) => {
  const navigation = useNavigation<RootStackNavigationProps>();
  const handleNavItemPress = (data: SideNavItems) => {
    navigation.navigate(data.navigateTo);
  };

  return (
    <View style={isOpen ? style.drawerContainer : style.drawerNotVisible}>
      {sideNavData.map(navData => {
        return (
          <TouchableOpacity
            onPress={() => handleNavItemPress(navData)}
            key={navData.name}>
            <View style={style.navItems}>
              <Icon
                name={navData.icon}
                color={COLORS.action.tertiary}
                size={FONTSIZES.lg}
              />
              <Text style={style.navText}>{navData.name}</Text>
              <Icon name="chevron-right" size={FONTSIZES.md} />
            </View>
            <Divider alignment="horizontal" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Drawer;
