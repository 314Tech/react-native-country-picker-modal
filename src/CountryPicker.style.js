import { StyleSheet, PixelRatio } from 'react-native';
import { getWidthPercent, getHeightPercent } from './ratio';

export default StyleSheet.create({
  modalContainer: {
    width: getWidthPercent(100),
    height: getHeightPercent(35),
    position: 'absolute',
    bottom: 0,
  },
  contentContainer: {
    width: getWidthPercent(100),
    backgroundColor: '#171616',
  },
  touchFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  countryText: {
    color: '#777777'
  },
  imgStyle: {
    resizeMode: 'contain',
    width: 25,
    height: 19,
    // borderWidth: 1 / PixelRatio.get(),
    // borderColor: '#eee',
    opacity: 0.8,
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    width: 30,
    flex: 1,
    marginTop: 3,
  },
  itemCountry: {
    flexDirection: 'row',
    height: getHeightPercent(7),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemCountryFlag: {
    justifyContent: 'center',
    alignItems: 'center',
    width: getWidthPercent(15),
  },
  itemCountryName: {
    justifyContent: 'center',
    width: getWidthPercent(80),
    borderBottomWidth: 2 / PixelRatio.get(),
    borderBottomColor: '#252525',
    height: getHeightPercent(7),
  },
  countryName: {
    fontSize: getHeightPercent(2.2),
    color: '#777777'
  }
});
