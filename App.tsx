import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {MainNavigator} from './app/navigation/MainNavigation';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
