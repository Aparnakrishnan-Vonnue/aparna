import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HOME: undefined;
  CUTLERY_STOCK: undefined;
  INGREDIENTS_STOCK: undefined;
  DAILY_EXPENSE: undefined;
  STOCKOUTS: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export type RootStackRouterProps<T extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, T>;
