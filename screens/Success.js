import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Custombutton from '../components/Custombutton';
const Success = () => {
  const navigation = useNavigation();
  const notification = () => {
    navigation.navigate('Notifications');
  };
  const home = () => {
    navigation.navigate('Rating');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SUCCESS!</Text>
      <Image
        style={styles.bigimg}
        source={require('../images/logo.png')}
      ></Image>
      <Image
        style={styles.smallimg}
        source={require('../images/check.png')}
      ></Image>
      <Text style={styles.texts1}>Your order will be delivered soon.</Text>
      <Text style={styles.texts2}>Thank you for choosing our app!</Text>

      <Custombutton
        welcome={false}
        navigate={notification}
        bgColor="black"
        title={'Track your orders'}
        width={315}
        mt={20}
        br={8}
      />
      <TouchableOpacity onPress={home}>
        <View style={styles.button}>
          <Text
            style={{
              color: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              fontWeight: '600',
            }}
          >
            BACK TO HOME
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1, alignItems: 'center'},
  text: {fontSize: 36, fontWeight: '700', color: 'black', marginTop: 100},
  bigimg: {width: 270, height: 230, marginTop: 30},
  texts1: {fontSize: 18, marginTop: 30},
  texts2: {fontSize: 18},
  smallimg: {width: 42, height: 42},
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    height: 60,
    width: 315,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25,
  },
});
export default Success;
