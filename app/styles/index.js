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
    borderRadius: 8,
    padding: 20,
    backgroundColor: '#AAAAAAAA',
  },
  circleButton: {
    width: 40,
    height: 40,
    margin: 10,
    borderRadius: 21,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7043'
  },
  circleImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  item: {
  },
  navigationBar: {
    backgroundColor: '#FF7043'
  },
  navigationButton: {
    flex: 1,
    aspectRatio: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
