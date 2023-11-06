import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../../theme/colors';

interface EmptyComponentProps {
  loading?: boolean;
}

export const EmptyComponent = ({loading}: EmptyComponentProps) => {
  if (loading) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>No Results 🥲</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
  },
});
