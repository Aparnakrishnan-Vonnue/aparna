import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Router} from './src/router';

const Stack = createNativeStackNavigator();

const App = () => {
  return <Router />;
};

export default App;
