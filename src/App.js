import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { TabNavigator } from './routes/TabNavigation.routes';

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#000" />
      <TabNavigator />
    </NavigationContainer>
  );
};
