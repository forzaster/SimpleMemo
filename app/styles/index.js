import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullscreen: {
    flex: 1,
    backgroundColor: '#222222',
  },
  fab: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  circleButton: {
    width: 64,
    height: 64,
    margin: 10,
    borderRadius: 32
  },
  circleImage: {
    width: 64,
    height: 64,
    borderRadius: 32
  },
});
