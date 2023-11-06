import React, {memo} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, Pressable} from 'react-native';

import {ImageExt} from './ImageExt';

import colors from '../theme/colors';
import {useIsLandscape} from '../hooks/useIsLandscape';
import {RootStackParamList} from '../types/navigation';

type NavigationType = NavigationProp<RootStackParamList>;

interface PreviewProps {
  img: string;
  title: string;
  author: string;
  price: number;
}

export const Preview = memo(
  ({img, title = '', author = '', price = 0}: PreviewProps) => {
    const {navigate} = useNavigation<NavigationType>();
    const isLandscape = useIsLandscape();

    const onPress = () => {
      navigate('Details', {
        img,
        title,
        author,
        price,
      });
    };

    return (
      <Pressable
        onPress={onPress}
        style={[
          styles.wrapper,
          isLandscape ? styles.landscapeWrapper : undefined,
        ]}>
        <ImageExt
          bgSt={styles.bgSt}
          source={{uri: img, cache: 'force-cache'}}
          imgStyle={styles.img}
          wrapperStyle={styles.imgWrapper}
        />
        <View style={styles.innerWrapper}>
          <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.author} numberOfLines={1}>
            {author}
          </Text>
          <Text style={styles.price}>
            {EUR_SIGN}
            {` ${price}`}
          </Text>
        </View>
      </Pressable>
    );
  },
);

const EUR_SIGN = <>&#8364;</>;
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    maxWidth: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: 180,
    backgroundColor: colors.black900,
    borderRadius: 12,
    marginVertical: 8,
  },
  landscapeWrapper: {
    maxWidth: '49%',
  },
  innerWrapper: {
    width: '55%',
    marginLeft: 8,
    marginTop: 8,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  imgWrapper: {
    flex: 1,
  },
  img: {
    flex: 1,
    width: 'auto',
    height: '100%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 'auto',
  },
  author: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.teal,
    marginBottom: 8,
  },
  bgSt: {
    backgroundColor: colors.grey,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});
