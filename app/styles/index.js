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
    width: 48,
    height: 48,
    margin: 10,
    borderRadius: 24,
    alignSelf: 'flex-end',
  },
  circleImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FF7043'
  },
  item: {
  },
});
