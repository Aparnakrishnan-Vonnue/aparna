import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import BottomNavBar from '../../components/BottomNavBar';
import LottieView from 'lottie-react-native';
import {style} from './style';

const HomeScreen = () => {
  return (
    <View>
      <ScrollView>
        <View style={style.mainContainer}>
          <LottieView
            source={require('../../assets/lotties/versatile-icon-set.json')}
            autoPlay
            loop
            style={style.lottie}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
