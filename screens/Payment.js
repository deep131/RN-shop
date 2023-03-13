import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const Payment = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('Profile');
  };
  const addpay = () => {
    navigation.navigate('Addpay');
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <Image
            style={styles.headimg}
            source={require('../images/back3.png')}
          ></Image>
        </TouchableOpacity>

          <Text style={styles.headtext}>Payment method</Text>
        
      </View>

      <Image
        style={styles.card}
        source={require('../images/card11.png')}
      ></Image>
      <View style={styles.cbview}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={styles.cbtext}>Use as default payment method</Text>
      </View>
      <Image
        style={styles.card}
        source={require('../images/card12.png')}
      ></Image>
      <View style={styles.cbview}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox2}
          onValueChange={newValue => setToggleCheckBox2(newValue)}
        />
        <Text style={styles.cbtext}>Use as default payment method</Text>
      </View>
      <TouchableOpacity style={styles.addview} onPress={addpay}>
        <Image
          style={styles.addimage}
          source={require('../images/add2.png')}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 313,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 40,
  },
  cbview: {flexDirection: 'row', marginLeft: 20, marginTop: 20},
  cbtext: {fontWeight: '400', fontSize: 18, color: '#242424'},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 40,
    paddingBottom: 10,
  },
  headimg: {
    height: 16,
    width: 8,
    marginLeft: 20,
  },
  headtext: {
    marginLeft: 90,
    fontSize: 18,

    fontWeight: '700',
    color: 'black',
  },
  addimage: {height: 20, width: 20},
  addview: {
    position: 'absolute',
    bottom: 20,
    borderRadius: 100,
    backgroundColor: 'white',
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 280,
  },
});
export default Payment;
