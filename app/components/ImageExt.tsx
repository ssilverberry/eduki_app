import React, {useState} from 'react';
import {
  View,
  Image,
  ImageProps,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  Falsy,
} from 'react-native';

import colors from '../theme/colors';

interface ImageExtProps {
  source: ImageProps['source'];

  bgSt?: ViewStyle;
  loaderSize?: number | 'small' | 'large';
  resizeMode?: ImageProps['resizeMode'];
  imgStyle?: ImageProps['style'];
  wrapperStyle?: ViewStyle | (ViewStyle | Falsy)[];
}

export const ImageExt = ({
  source,
  loaderSize,
  resizeMode,
  bgSt,
  imgStyle,
  wrapperStyle,
}: ImageExtProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const onLoadEnd = () => setLoading(false);
  const onLoadStart = () => setLoading(true);

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <View style={[styles.previewBg, bgSt]} />
      {loading ? (
        <ActivityIndicator size={loaderSize} style={styles.loader} />
      ) : null}
      <Image
        source={source}
        style={imgStyle}
        resizeMode={resizeMode}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  loader: {
    position: 'absolute',
    top: '49%',
    left: '45%',
  },
  previewBg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.black900,
    opacity: 0.3,
    borderRadius: 12,
    zIndex: 0,
  },
});
