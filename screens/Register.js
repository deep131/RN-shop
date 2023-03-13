import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Custombutton from '../components/Custombutton';
const Register = () => {
  const navigation = useNavigation();
  const login = () => {
    navigation.navigate('Login');
  };
  const profile = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar
          backgroundColor="#ffffff"
          barStyle="dark-content"
          hidden={false}
          translucent={true}
        />
        <View style={styles.innercontainer}>
          <View style={styles.logimgview}></View>
          <Image
            style={styles.imageicon}
            source={require('../images/loginimg.png')}
          ></Image>
          <View style={styles.line}></View>
        </View>
        <View style={styles.titletexts}>
          <Text style={styles.head2}>WELCOME </Text>
        </View>
        <View style={styles.formview}>
          <Text style={styles.inputhead}>Name</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.inputhead}>Email</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.inputhead}>Password</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.input}></TextInput>
            <Image
              style={styles.eye}
              source={require('../images/eye.png')}
            ></Image>
          </View>
          <Text style={styles.inputhead}>Confirm Password</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.input}></TextInput>
            <Image
              style={styles.eye}
              source={require('../images/eye.png')}
            ></Image>
          </View>
          <View style={styles.bottomview}>
            <Custombutton
              bgColor="black"
              title={'SIGN UP'}
              width={285}
              br={8}
            />
            <View style={styles.bottominnerview}>
              <Text style={styles.smallbottomtext}>Already have account ?</Text>
              <TouchableOpacity onPress={login}>
                <Text style={styles.signin}> SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  smallbottomtext: {fontSize: 14, fontWeight: '700', marginTop: 33},
  innercontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signin: {color: '#303030', fontSize: 18, fontWeight: '600', marginTop: 30},
  logimgview: {
    borderWidth: 1,
    width: 100,
    backgroundColor: '#BDBDBD',
    marginTop: 70,
    marginRight: 20,
  },
  imageicon: {height: 64, width: 64, marginTop: 60},
  line: {
    borderWidth: 1,
    width: 100,
    backgroundColor: '#BDBDBD',
    marginTop: 70,
    marginLeft: 20,
  },
  titletexts: {marginLeft: 30, marginTop: 35},
  head1: {fontSize: 24, color: '#909090'},
  head2: {fontSize: 24, color: 'black'},
  formview: {
    marginLeft: 30,
    marginTop: 5,
    width: 315,
    paddingTop: 40,
    paddingBottom: 40,
  },
  inputhead: {
    color: '#909090',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 5,
    marginTop: 15,
  },
  input: {
    borderBottomEndRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderBottomColor: '#E0E0E0',
    width: 280,
    marginLeft: 5,
  },
  bottomview: {alignItems: 'center', marginTop: 35},
  eye: {height: 13, width: 18, marginTop: 20},
  bottomtext: {
    color: '#303030',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
  },
  bottominnerview: {flexDirection: 'row'},
});
export default Register;
