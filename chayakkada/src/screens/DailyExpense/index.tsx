import * as React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ScreenHeader from '../../components/Common/ScreenHeader';
import DatePickerElement from '../../components/DatePickerElement';
import {useEffect, useState} from 'react';
import {styles} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CurrencyInput from 'react-native-currency-input';
import {COLORS} from '../../theme/theme';
import {CashEntryModal} from './component/CashEntryModal';

const DailyExpense = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [cashInValue, setCashInValue] = useState<any>(0);
  const [cashOutValue, setCashOutValue] = useState<any>(0);
  const [currBalance, setCurrBalance] = useState('0.000');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [amount, setAmount] = useState<any>(0);
  const [isSaved, setIsSaved] = useState(false);

  const handleDateConfirm = (date: Date) => {
    setDate(date);
    setOpen(!open);
  };

  const handleSelection = (mode: string) => {
    setIsModalOpen(true);
    setSelected(mode);
  };

  const handleSave = (addedEntry: number) => {
    setIsSaved(true);
    setAmount(addedEntry);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isSaved && selected === 'cash_in') {
      setCashInValue(amount);
    } else if (isSaved && selected === 'cash_out') {
      setCashOutValue(amount);
    }
  }, [isSaved, selected, amount]);

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
            placeholder="Current Balance..."
            style={styles.balanceText}
            value={cashInValue}
            onChangeValue={setCashInValue}
            prefix="₹"
            delimiter=""
            precision={0}
            minValue={0}
            onChangeText={formattedValue => setCurrBalance(formattedValue)}
            editable={false}
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
            value={`+₹  ${cashInValue}`}
            editable={false}
          />
        </View>
        <View style={styles.moneyInandOut}>
          <Text>Total out (-)</Text>
          <TextInput
            placeholder="- ₹ 0.00"
            style={[styles.moneyIn, styles.moneyOut]}
            placeholderTextColor={COLORS.normalRed}
            value={`-₹ ${cashOutValue}`}
            editable={false}
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
        onSave={handleSave}
      />
    </View>
  );
};

export default DailyExpense;
