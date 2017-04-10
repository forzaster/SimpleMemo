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
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 20,
    backgroundColor: '#BBAAAAAA',
  },
  circleButton: {
    width: 40,
    height: 40,
    margin: 10,
    borderRadius: 21,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4FC2F7'
  },
  circleImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  item: {
    padding: 8,
    borderWidth: 0.5,
  },
  navigationBar: {
    backgroundColor: '#4FC2F7'
  },
  navigationButton: {
    flex: 1,
    aspectRatio: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemTitleText: {
    fontSize: 14,
    padding: 4,
  },
  itemContentText: {
    fontSize: 12,
    padding: 4,
  }
});
