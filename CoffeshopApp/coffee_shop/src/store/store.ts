import {create} from 'zustand'; // create the store.
import {produce} from 'immer'; // update the store for deeply linked objects.
import {persist, createJSONStorage} from 'zustand/middleware'; //persist the store.
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeanData';

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeList: CoffeeData,
      BeanList: BeansData,
      CartPrice: 0,
      FavoritesList: [],
      CartList: [],
      OrderHistoryList: [],
    }),
    {
      name: 'coffee-shop',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

//produce method is not used bcoz it is used inside the functions which will alter the state of the store
