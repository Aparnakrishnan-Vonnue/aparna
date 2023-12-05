import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultScreenOptions} from '../constants';
import HomeScreen from '../screens/HomeScreen';

export const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const renderRoutes = () => {
    return (
      <>
        <Stack.Screen name="HOME" component={HomeScreen} />
      </>
    );
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={DefaultScreenOptions}>
          {renderRoutes()}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
