import * as React from 'react';
import {SetStateAction, useState} from 'react';
import BottomSheet from '../../../components/BottomSheet';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTSIZE, FONT_FAMILY} from '../../../theme/theme';
import {Divider} from '../../../components/Common/Divider';
import CurrencyInput from 'react-native-currency-input';

interface CashEntryProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  cashMode: string;
  onSave: (addedEntry: number) => void;
}
export const CashEntryModal = ({
  isOpen,
  setIsOpen,
  cashMode,
  onSave,
}: CashEntryProps) => {
  const [addedEntry, setAddedEntry] = useState(0);
  const [value, setValue] = useState<any>(0);
  const [displayDetails, setDisplayDetails] = useState(false);

  console.log(addedEntry);

  return (
    <BottomSheet isOpen={isOpen} setIsOpen={setIsOpen}>
      <View>
        <Text style={styles.entryHeader}>Add Entries</Text>
      </View>
      <Divider />
      <CurrencyInput
        style={styles.amountInput}
        value={value}
        precision={3}
        prefix="INR "
        onChangeValue={setValue}
        onChangeText={text => setAddedEntry(+text.slice(4))}
        onFocus={() => setDisplayDetails(true)}
      />
      {displayDetails && (
        <>
          <TextInput
            style={[styles.amountInput, styles.remarks]}
            placeholder="Remarks..."
            multiline
            placeholderTextColor={COLORS.neutralGray}
          />
        </>
      )}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => onSave(addedEntry)}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  entryHeader: {
    color: COLORS.primaryBlackHex,
    fontSize: FONTSIZE.size_20,
    fontFamily: FONT_FAMILY.poppins_semibold,
    marginBottom: 5,
  },
  amountInput: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: COLORS.neutralGray,
    padding: 10,
  },
  saveButton: {
    margin: 10,
    alignSelf: 'flex-end',
    backgroundColor: COLORS.woodenBrown,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
  },
  saveText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONT_FAMILY.poppins_medium,
  },
  remarks: {
    marginTop: 30,
    borderColor: COLORS.lightGrey,
    height: 100,
    textAlignVertical: 'top',
    borderRadius: 8,
    backgroundColor: COLORS.lightGrey,
  },
});
