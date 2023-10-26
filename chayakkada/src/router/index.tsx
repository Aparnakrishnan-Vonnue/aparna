import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';
import CutleryStock from '../screens/CutleryStock';
import IngredientsStock from '../screens/IngredientsStock';
import DailyExpense from '../screens/DailyExpense';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultScreenOptions} from '../constants';
import Stockouts from '../screens/Stockouts';

export const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const renderRoutes = () => {
    return (
      <>
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="CUTLERY_STOCK" component={CutleryStock} />
        <Stack.Screen name="INGREDIENTS_STOCK" component={IngredientsStock} />
        <Stack.Screen name="DAILY_EXPENSE" component={DailyExpense} />
        <Stack.Screen name="STOCKOUTS" component={Stockouts} />
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
