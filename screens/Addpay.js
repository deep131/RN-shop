import React from 'react';
import {View, TouchableOpacity, Text, Image, TextInput,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Custombutton from '../components/Custombutton';
const Addpay = () => {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('Payment');
  };
  return (
    <View>
      <View
        style={styles.header}
      >
        <TouchableOpacity onPress={back}>
          <Image
            style={styles.headimg}
            source={require('../images/back3.png')}
          ></Image>
        </TouchableOpacity>
   
          <Text
            style={styles.headtext}
          >
            Add Payment method
          </Text>
     
      </View>
      <Image
        style={styles.cardimg}
        source={require('../images/card13.png')}
      ></Image>
     <View style={styles.grayet}>
            <Text style={styles.ettext}>CardHolder Name</Text>
      <TextInput
        
        placeholder="Ex: Bruno Pham"
      ></TextInput>
      </View>
      <View style={styles.whiteet}>
            <Text style={styles.ettext}>Card Number</Text>
      <TextInput
        
      
      ></TextInput>
      </View>
      <View style={styles.botomview}>
      <View style={styles.smallgray}>
            <Text style={styles.ettext}>CVV</Text>
      <TextInput 
        
        placeholder="Ex: 123"
      ></TextInput>
      </View>
      <View style={styles.smallwhite}>
            <Text style={styles.ettext}>Expiration Date</Text>
      <TextInput
        keyboardType='numeric'
      
      ></TextInput>
      </View>
      </View>

      <Custombutton  bgColor="black" title={"ADD NEW CARD"} width={250} br={8} mt={100}/>
    </View>
  );
};
const styles=StyleSheet.create({
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
  cardimg:{height: 180, width: 333, alignSelf: 'center', marginTop: 20},
  grayet:{
    backgroundColor: '#CACCCE',
    borderRadius: 4,
    marginTop: 33,
    width: 335,
    height: 66,
    alignSelf: 'center',paddingLeft:16
  },
  whiteet:{
    backgroundColor: 'white',
    borderRadius: 4,
    marginTop: 20,
    width: 335,
    height: 66,
    alignSelf: 'center',borderColor:'#DBDBDB',borderWidth:1,paddingLeft:16
  },
  ettext:{fontSize:12,fontFamily:'400',color:'#808080',marginTop:10},
  smallgray:{
    backgroundColor: '#CACCCE',
    borderRadius: 4,
    marginTop: 33,
    width: 157,
    height: 66,
    alignSelf: 'center',paddingLeft:16
  },
  smallwhite:{
    backgroundColor: 'white',
    borderRadius: 4,
    marginTop: 20,
    width: 157,
    height: 66,marginLeft:20,
    alignSelf: 'center',borderColor:'#DBDBDB',borderWidth:1,paddingLeft:16
  },
botomview:{flexDirection:'row',alignItems:'baseline',justifyContent:'center'},

})

export default Addpay;
