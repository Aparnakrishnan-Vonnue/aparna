import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';
import {style} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Divider} from '../Common/Divider';
import {sideNavData} from '../../data/sideNavData';

interface DrawerProps {
  isOpen: boolean;
}
const Drawer = ({isOpen}: DrawerProps) => {
  const handleNavItemPress = () => {};
  return (
    <View style={isOpen ? style.drawerContainer : style.drawerNotVisible}>
      {sideNavData.map(navData => {
        return (
          <TouchableOpacity onPress={handleNavItemPress}>
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
