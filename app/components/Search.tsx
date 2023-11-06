import React, {memo, useContext, useState} from 'react';
import {
  Platform,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import {SearchContext} from '../contexts/SearchContext';
import colors from '../theme/colors';

export const Search = memo(() => {
  const {search} = useContext(SearchContext);
  const [text, setText] = useState<string>('');

  const onChangeText = (t: string) => {
    setText(t);
  };

  const onSubmitEditing = () => {
    search(text);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.wrapper}
      keyboardVerticalOffset={24}>
      <TextInput
        value={text}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholder="Search"
        style={styles.input}
        enterKeyHint="search"
        selectionColor={colors.teal}
        placeholderTextColor={colors.white}
        clearButtonMode="while-editing"
        keyboardAppearance="dark"
      />
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    marginTop: 'auto',
    borderRadius: 8,
    marginLeft: -8,
    marginRight: -8,
  },
  input: {
    fontSize: 16,
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.grey,
    color: colors.white,
  },
});
