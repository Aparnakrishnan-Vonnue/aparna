import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {style} from './style';
import Drawer from '../../components/Drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTSIZE} from '../../theme/theme';

const HomeScreen = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleMenuPress = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <View style={style.headerNav}>
        <TouchableOpacity onPress={handleMenuPress}>
          {!isDrawerOpen ? (
            <Icon
              name={'navicon'}
              color={COLORS.primaryWhiteHex}
              size={FONTSIZE.size_20}
            />
          ) : (
            <Icon
              name="close"
              color={COLORS.primaryWhiteHex}
              size={FONTSIZE.size_20}
            />
          )}
        </TouchableOpacity>
        <Text style={style.text}>Chayakkada</Text>
        <View></View>
      </View>
      <ScrollView contentContainerStyle={style.mainContainer}>
        <LottieView
          source={require('../../assets/lotties/tea-cup.json')}
          autoPlay
          loop
          style={style.lottie}
        />
      </ScrollView>
      <Drawer isOpen={isDrawerOpen} />
    </>
  );
};

export default HomeScreen;
