import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AA000000',
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
  item: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
  },
  itemTitleTextSingleLine: {
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  itemTitleText: {
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
  },
  itemContentText: {
    fontSize: 14,
    color: "#000000",
    opacity: 0.54,
    paddingTop: 4,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  settingItem: {
    borderBottomWidth: 0.2,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  settingItemSingleText: {
    fontSize: 16,
    color: "#000000",
    paddingTop: 8,
    paddingBottom: 8,
  },
  settingItem1stText: {
    fontSize: 16,
    color: "#000000",
    paddingBottom: 2,
  },
  settingItem2ndText: {
    fontSize: 14,
    color: "#000000",
    opacity: 0.54,
  }
});
