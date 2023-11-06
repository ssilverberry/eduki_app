import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Search} from '../components/Search';
import {List} from '../components/List/List';
import {useIsLandscape} from '../hooks/useIsLandscape';
import {SearchContextProvider} from '../contexts/SearchContext';

import themeStyles from '../theme/styles';

export const MainScreen = () => {
  const insets = useSafeAreaInsets();
  const isLandscape = useIsLandscape();

  return (
    <View
      style={[
        themeStyles.screen,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
        isLandscape
          ? {
              ...themeStyles.landscapeScreen,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            }
          : null,
      ]}>
      <Text style={themeStyles.header}>Home</Text>
      <SearchContextProvider>
        <List />
        <Search />
      </SearchContextProvider>
    </View>
  );
};
