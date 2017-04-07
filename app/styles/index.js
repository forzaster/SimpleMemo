import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullscreen: {
    flex: 1,
    backgroundColor: '#222222',
  },
  fabParent: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  popupParent: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  popup: {
    width: '90%',
    height: '90%',
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#AAAAAAAA',
  },
  circleButton: {
    width: 64,
    height: 64,
    margin: 10,
    borderRadius: 32,
    alignSelf: 'flex-end',
  },
  circleImage: {
    width: 64,
    height: 64,
    borderRadius: 32
  },
});
