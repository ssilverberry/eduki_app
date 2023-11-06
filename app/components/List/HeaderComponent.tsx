import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import colors from '../../theme/colors';

interface HeaderComponentProps {
  loading?: boolean;
}

export const HeaderComponent = ({loading}: HeaderComponentProps) => {
  return loading ? (
    <View style={styles.wrapper}>
      <ActivityIndicator size="small" color={colors.white} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 16,
  },
});
