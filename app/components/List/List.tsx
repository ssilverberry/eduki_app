import React, {useContext} from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';

import {Preview} from '../Preview';
import {EmptyComponent} from './EmptyComponent';
import {HeaderComponent} from './HeaderComponent';

import {useIsLandscape} from '../../hooks/useIsLandscape';
import {SearchContext} from '../../contexts/SearchContext';

import {Material} from '../../types/search';

export const List = () => {
  const isLandscape = useIsLandscape();
  const {data, isLoading, isLoadingMore, loadMore} = useContext(SearchContext);

  const onEndReached = () => {
    if (isLoading || isLoadingMore) {
      return;
    }
    loadMore();
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      onEndReached={onEndReached}
      key={isLandscape ? 'h' : 'v'}
      showsVerticalScrollIndicator={false}
      numColumns={isLandscape ? COLUMNS.h : COLUMNS.v}
      contentInset={CONTENT_INSET}
      initialNumToRender={INITIAL_NUM_TORENDER}
      ListHeaderComponent={<HeaderComponent loading={isLoading} />}
      ListEmptyComponent={<EmptyComponent loading={isLoading} />}
      contentContainerStyle={styles.listContent}
      columnWrapperStyle={isLandscape ? styles.columnWrapperStyle : undefined}
    />
  );
};

const renderItem: ListRenderItem<Material> = ({item}) => (
  <Preview
    title={item.title}
    price={item.price}
    img={item.firstPreviewImage.watermarked}
    author={item.author.details.publicName}
  />
);

const COLUMNS = {h: 2, v: 1};
const INITIAL_NUM_TORENDER = 10;
const CONTENT_INSET = {top: 16, bottom: 16};

const styles = StyleSheet.create({
  listContent: {
    flexGrow: 1,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});
