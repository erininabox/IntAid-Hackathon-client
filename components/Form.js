import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-datepicker';

const App = () => {

  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
 
  return (
    <View >
      <Text > Deboke Kominote Yo Sales Contract </Text>
      <View>
      <Text> Date of Purchase </Text>
            <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2020"
          maxDate="12-12-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
      <Text>Entrepreneur Information </Text>
      <View>
      <Text > First Name </Text>
        <TextInput 
          placeholder="First" />
      <Text >Last Name </Text>
        <TextInput
          placeholder="Last"
        />
        </View>
        <Text> Buyer Information </Text>
         <Text > First Name </Text>
        <TextInput 
          placeholder="First" />
      <Text >Last Name </Text>
        <TextInput
          placeholder="Last"
        />
        <Text > Business Name </Text>
             <TextInput
          placeholder="Business"
        />
        <Text> Natcom Number </Text>
        <Text> Digicel Number </Text>
        <Text> Address </Text>
        <Text> How many people live in the buyer's house? </Text>
        <Text> Product Purchased: (select one): </Text>
        <Text> Product Number: </Text>
        <Text> Payment Type (select one) </Text>
        <Text> Total Amount to be Paid: </Text>
        <Text> Total Number of Payments (loan only): </Text>
        <Text> Total Depost OR Full Cash Amount: </Text>
        <Text> Amount per Payment (loan only): </Text>
        <View>
        <Text> Signatures </Text>
        <Text> I, the buyer, agree to pay for the product purchased according to the payment information outlined above. All 
information stated above is correct to the best of my knowledge. I also agree that: </Text>
     <View>
      <View>
          <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text>Do you like React Native?</Text>
        </View>
        </View>




      </View>
    </View>
  );

}

