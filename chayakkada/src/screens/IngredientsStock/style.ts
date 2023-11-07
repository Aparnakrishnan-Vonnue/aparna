import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {paddingHorizontal: 15},
  head: {height: 60, backgroundColor: '#f1f8ff'},
  wrapper: {flexDirection: 'row'},
  title: {flex: 2, backgroundColor: '#f6f8fa'},
  row: {height: 28},
  text: {textAlign: 'center'},
  dataContainer: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
  stockInput: {flexDirection: 'row', alignItems: 'center', gap: 10},
  textIput: {
    borderColor: COLORS.primaryBlackHex,
    borderWidth: 1,
    width: 100,
    height: 40,
  },
  dropDownContainer: {
    backgroundColor: COLORS.borderGrey,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
    borderRadius: 8,
    height: 45,
  },
  dropDownList: {
    justifyContent: 'center',
    borderRadius: 8,
    alignContent: 'center',
    height: 300,
  },
  border: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    width: 110,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterButton: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: COLORS.borderGrey,
  },
  enterText: {
    color: COLORS.primaryBlackHex,
  },
});
