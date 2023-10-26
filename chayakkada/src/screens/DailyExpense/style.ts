import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE, FONT_FAMILY} from '../../theme/theme';

export const styles = StyleSheet.create({
  expenseContainer: {
    paddingHorizontal: 20,
    height: 700,
  },
  dateAndBalance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  dateButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 5,
    padding: 10,
    borderWidth: 1,
    width: 130,
    borderColor: COLORS.neutralGray,
  },
  balanceText: {
    borderWidth: 1,
    borderColor: COLORS.neutralGray,
    padding: 10,
    height: 40,
  },
  moneyInandOut: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrey,
  },
  moneyIn: {
    color: COLORS.normalGreen,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONT_FAMILY.poppins_medium,
  },
  moneyOut: {
    color: COLORS.normalRed,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginHorizontal: 15,
  },
  cashInButton: {
    backgroundColor: COLORS.normalGreen,
    padding: 10,
    elevation: 5,
  },
  cashText: {
    color: COLORS.primaryBlackHex,
    minWidth: 160,
    textAlign: 'center',
    fontSize: FONTSIZE.size_18,
    fontFamily: FONT_FAMILY.poppins_semibold
  },
  cashOutButton: {
    backgroundColor: COLORS.normalRed,
  },
});
