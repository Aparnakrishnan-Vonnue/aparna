import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ScreenHeader from '../../components/Common/ScreenHeader';
import DatePickerElement from '../../components/DatePickerElement';
import {useState} from 'react';
import {styles} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CurrencyInput from 'react-native-currency-input';
import {COLORS} from '../../theme/theme';
import {CashEntryModal} from './component/CashEntryModal';

const DailyExpense = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<any>(0);
  const [currBalance, setCurrBalance] = useState('0.000');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const handleDateConfirm = (date: Date) => {
    setDate(date);
    setOpen(!open);
  };

  const handleSelection = (mode: string) => {
    setIsModalOpen(true);
    setSelected(mode);
  };

  return (
    <View>
      <ScreenHeader title="Daily expense 💸" />
      <ScrollView contentContainerStyle={styles.expenseContainer}>
        <View style={styles.dateAndBalance}>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.dateButton}>
            <Icon name="calendar" />
            <Text>{date.toLocaleDateString()}</Text>
            <Icon name="chevron-down" />
          </TouchableOpacity>
          <CurrencyInput
            id="1"
            placeholder="Enter Current Balance..."
            style={styles.balanceText}
            value={value}
            onChangeValue={setValue}
            prefix="₹"
            delimiter="."
            separator=","
            precision={3}
            minValue={0}
            onChangeText={formattedValue => setCurrBalance(formattedValue)}
          />
        </View>

        <DatePickerElement
          open={open}
          date={date}
          onDateConfirm={date => handleDateConfirm(date)}
          onDateModalCancel={() => setOpen(false)}
        />

        <View style={styles.moneyInandOut}>
          <Text>Total in (+)</Text>
          <TextInput
            placeholder="+ ₹ 0.00"
            style={styles.moneyIn}
            placeholderTextColor={COLORS.normalGreen}
          />
        </View>
        <View style={styles.moneyInandOut}>
          <Text>Total out (-)</Text>
          <TextInput
            placeholder="- ₹ 0.00"
            style={[styles.moneyIn, styles.moneyOut]}
            placeholderTextColor={COLORS.normalRed}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cashInButton}
          onPress={() => handleSelection('cash_in')}>
          <Text style={styles.cashText}>+ CASH IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cashInButton, styles.cashOutButton]}
          onPress={() => handleSelection('cash_out')}>
          <Text style={styles.cashText}>- CASH OUT</Text>
        </TouchableOpacity>
      </View>
      <CashEntryModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        cashMode={selected}
      />
    </View>
  );
};

export default DailyExpense;
