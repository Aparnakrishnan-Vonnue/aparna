import * as React from 'react';
import {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import ScreenHeader from '../../components/Common/ScreenHeader';
import {styles} from './style';
import Spacer from '../../components/Common/Spacer';

const IngredientsTable = {
  tableHead: ['Name', 'Available Stock (in kg)', 'Stock Out', 'Current Stock'],
  tableTitle: [
    'Tea Powder',
    'Sugar',
    'Cardamom',
    'Milk',
    'Coffee Powder',
    'Ginger',
    'Lemon',
    'Mint Leaves',
    'Honey',
  ],
  tableData: [
    [10, 2, 8],
    [10, 2, 8],
    [10, 2, 8],
    [10, 2, 8],
    [10, 2, 8],
    [10, 2, 2],
    [10, 2, 8],
    [10, 2, 8],
    [10, 2, 8],
    [10, 2, 8],
  ],
};

const IngredientsStock = () => {
  const [selectedIngredient, setSelectedIngredient] = useState('');
  const [stockOuts, setStockOuts] = useState('');

  const availableStock = IngredientsTable.tableTitle.filter(title => {
    console.log(selectedIngredient, title);
  });

  IngredientsTable.tableData.forEach(data => {
    console.log(data);
  });

  return (
    <View>
      <ScreenHeader title="Ingredients Stock 🌿" />
      <Spacer space={22} />
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row
            data={IngredientsTable.tableHead}
            flexArr={[2, 1, 1, 1]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={IngredientsTable.tableTitle}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            />
            <Rows
              data={IngredientsTable.tableData}
              flexArr={[1, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
        <Spacer space={22} />
        <Text>Enter Stock Details Here</Text>
        <Spacer space={22} />
        <View style={styles.stockInput}>
          <Text>Available Stock : </Text>
          <TextInput style={styles.textIput} value={'rg'} />
          <SelectDropdown
            data={IngredientsTable.tableTitle}
            onSelect={selectedItem => {
              setSelectedIngredient(selectedItem);
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={item => {
              return item;
            }}
            searchPlaceHolder="ingredients"
            buttonStyle={styles.dropDownContainer}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropDownList}
          />
        </View>
        <Spacer space={30} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.enterButton}>
            <Text style={styles.enterText}>Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default IngredientsStock;
