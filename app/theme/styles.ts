import {StyleSheet} from 'react-native';

import colors from './colors';

export default StyleSheet.create({
  screen: {
    flexGrow: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.black,
  },
  landscapeScreen: {
    paddingVertical: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.teal,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  text: {
    color: colors.white,
  },
  goBackIcon: {
    width: 12,
    height: 12,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderTopLeftRadius: 4,
    borderTopColor: colors.teal,
    borderLeftColor: colors.teal,
    transform: [{rotate: '-45deg'}],
    marginRight: 8,
    marginTop: 6,
  },
});
