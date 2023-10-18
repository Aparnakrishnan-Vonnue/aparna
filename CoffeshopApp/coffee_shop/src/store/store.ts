import React from 'react';
import {create} from 'zustand'; // create the store.
import {produce} from 'immer'; // update the store for deeply linked objects.
import {persist, createJSONStorage} from 'zustand/middleware'; //persist the store.
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeanData';

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      CartPrice: 0,
      FavoritesList: [],
      CartList: [],
      OrderHistoryList: [],
    }),
    {
      name: 'coffee_shop',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

//produce method is not used bcoz it is used inside the functions which will alter the state of the store

//This useState function is part of a state management system implemented using the Zustand library in a React native app. It serves the purpose of creating a centralized store for managing various types of state within your application. This state can include data like coffee items, beans, shopping cart information favorites and order history.

//Centralized State Management: Zustand allows you to create a central store where you can store and manage various types of application state. This centralization makes it easier to access and update the state from different parts of your application.

//Persisting State: By using the persist middleware, your application state is stored persistently, typically in local storage or async storage (in the case of React Native). This means that even if the app is closed and reopened, the state is preserved, providing a consistent user experience.

//Data Initialization: The initial state of your store includes data like CoffeeList and BeanList, which are likely items for sale or display in your coffee-related app. These data sets can be accessed by various components in your app.

//Cart and Favorites: The CartList and FavoritesList are likely used to keep track of items added to the shopping cart and favorited items, respectively. These lists allow you to keep track of user interactions and preferences.
