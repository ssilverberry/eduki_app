import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {ImageExt} from '../components/ImageExt';
import {useIsLandscape} from '../hooks/useIsLandscape';

import {RootStackParamList} from '../types/navigation';

import colors from '../theme/colors';
import themeStyles from '../theme/styles';

type DetailsRouteParams = RouteProp<RootStackParamList, 'Details'>;

export const DetailsScreen = () => {
  const {params} = useRoute<DetailsRouteParams>();
  const {goBack} = useNavigation();
  const insets = useSafeAreaInsets();
  const isLandscape = useIsLandscape();

  const screenStyles = [
    themeStyles.screen,
    {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    },
    isLandscape
      ? {
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingTop: 16,
          paddingBottom: 16,
        }
      : undefined,
  ];

  return (
    <View style={screenStyles}>
      <View style={styles.navRow}>
        <Pressable
          onPress={goBack}
          hitSlop={HIT_SLOP}
          style={themeStyles.goBackIcon}
        />
        <Text style={themeStyles.header}>Details</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollViewConent,
          isLandscape ? styles.landscape : null,
        ]}>
        <ImageExt
          wrapperStyle={[
            styles.preview,
            isLandscape ? styles.landscapePreview : undefined,
          ]}
          loaderSize="large"
          imgStyle={styles.img}
          source={{uri: params.img}}
          resizeMode="contain"
        />

        <View style={isLandscape ? styles.landscapeDetails : null}>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Title</Text>
            <Text style={[themeStyles.text, styles.text]}>{params.title}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Author</Text>
            <Text style={[themeStyles.text, styles.text]}>{params.author}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Price</Text>
            <Text style={[themeStyles.text, styles.text]}>
              {EUR_SIGN}
              {` ${params.price}`}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const HIT_SLOP = 24;
const EUR_SIGN = <>&#8364;</>;
const styles = StyleSheet.create({
  landscape: {
    flexDirection: 'row',
  },
  navRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  preview: {
    flex: 1,
    width: '100%',
    height: 400,
    position: 'relative',
    paddingVertical: 24,
    marginBottom: 32,
  },
  landscapePreview: {
    maxWidth: '50%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  landscapeDetails: {
    marginLeft: 16,
    maxWidth: '50%',
  },
  wrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '800',
    color: colors.teal,
    marginBottom: 4,
  },
  scrollViewConent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  text: {
    fontSize: 18,
  },
});
