import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';
import {style} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Divider} from '../Common/Divider';
import {SideNavItems, sideNavData} from '../../data/sideNavData';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';

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
                color={COLORS.primaryGreyHex}
                size={FONTSIZE.size_16}
              />
              <Text style={style.navText}>{navData.name}</Text>
              <Icon name="chevron-right" size={FONTSIZE.size_12} />
            </View>
            <Divider alignment="horizontal" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Drawer;
