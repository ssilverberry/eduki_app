import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {MainScreen} from '../screens/MainScreen';
import {DetailsScreen} from '../screens/DetailsScreen';
import {RootStackParamList} from '../types/navigation';

const MainSN = createNativeStackNavigator<RootStackParamList>();
const SCREEN_OPTIONS: NativeStackNavigationOptions = {headerShown: false};

export const MainNavigator = () => {
  return (
    <MainSN.Navigator screenOptions={SCREEN_OPTIONS} initialRouteName="Main">
      <MainSN.Screen component={MainScreen} name="Main" />
      <MainSN.Screen component={DetailsScreen} name="Details" />
    </MainSN.Navigator>
  );
};
