import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import Custombutton from '../components/Custombutton';
const AddAd = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('Shipping');
  };
  return (
    <View>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={back}>
            <Image
              style={styles.headimg}
              source={require('../images/back3.png')}
            ></Image>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.headtext}>Add shipping address</Text>
          </View>
        </View>

        <View style={styles.grayet}>
          <Text
            style={styles.ettext}
          >
            Full name
          </Text>
          <TextInput
            style={styles.edittext}
            placeholder="Ex: Bruno Pham"
          ></TextInput>
        </View>
        <View style={styles.grayet}>
          <Text
            style={styles.ettext}
          >
            Address
          </Text>
          <TextInput
            style={styles.edittext}
            placeholder="Ex: 25 Robert Latouche Street"
          ></TextInput>
        </View>
        <View
          style={styles.whiteet}
        >
          <Text
            style={styles.ettext}
          >
            Zipcode (Postal Code)
          </Text>
          <TextInput style={styles.edittext}></TextInput>
        </View>
        <View
          style={styles.graydropdown}
        >
          <Text
            style={styles.droptext}
          >
            Country
          </Text>
          <Picker
            placeholder="Select Country"
            style={styles.picker}
            mode={'dialog'}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Select Country" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View
          style={styles.whitedropdown}
        >
          <Text
            style={styles.droptext}
          >
            City
          </Text>
          <Picker
            style={styles.picker}
            mode={'dialog'}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="New York" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View
          style={styles.graydropdown}
        >
          <Text
            style={styles.droptext}
          >
            District
          </Text>
          <Picker
            style={styles.picker}
            mode={'dialog'}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Select District" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

        <Custombutton
          bgColor="black"
          title={' SAVE ADDRESS'}
          width={250}
          br={8}
          mt={80}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 40,
    paddingBottom: 20,
  },
  headimg: {
    height: 16,
    width: 8,
    marginLeft: 20,
  },
  headtext: {
    marginLeft: 80,
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  grayet: {
    backgroundColor: '#CACCCE',
    borderRadius: 4,
    marginTop: 23,
    width: 335,
    height: 66,
    alignSelf: 'center',
  },
  whiteet: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    marginTop: 23,
    width: 335,
    height: 66,
    alignSelf: 'center', borderColor: '#DBDBDB',      borderWidth: 1,
  },
  ettext:{
    fontSize: 12,
    fontFamily: '400',
    marginLeft: 16,
    color: '#808080',
    marginTop: 10,
  },
  edittext:{marginLeft: 16},
  graydropdown:{
    borderWidth: 1,
    borderColor: '#DBDBDB',
    backgroundColor: '#CACCCE',
    width: 335,
    alignSelf: 'center',
    height: 66,
    marginTop: 20,
    borderRadius: 4,
  },
  whitedropdown:{
    borderWidth: 1,
   
    backgroundColor: 'white',
    width: 335,
    alignSelf: 'center',
    height: 66,
    marginTop: 20,
    borderRadius: 4,
  },
  droptext:{
    fontSize: 12,
    fontFamily: '400',
    marginLeft: 26,
    color: '#808080',
  },
  picker:{
    width: '95%',
    alignSelf: 'center',
  }

});
export default AddAd;
