import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface DatePickerProps {
  open: boolean;
  date: Date;
  onDateConfirm: (date: Date) => void;
  onDateModalCancel: () => void;
}
const DatePickerElement = ({
  open,
  date,
  onDateConfirm,
  onDateModalCancel,
}: DatePickerProps) => {
  return (
    <View>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={onDateConfirm}
        onCancel={onDateModalCancel}
      />
    </View>
  );
};

export default DatePickerElement;
