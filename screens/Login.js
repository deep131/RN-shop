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
const Login = () => {
  const navigation = useNavigation();
  const register = () => {
    navigation.navigate('Register');
  };
  const home = () => {
    navigation.navigate('BottomNav');
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
          <Text style={styles.head1}>Hello !</Text>
          <Text style={styles.head2}>WELCOME BACK</Text>
        </View>
        <View style={styles.formview}>
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
          <View style={styles.bottomview}>
            <TouchableOpacity>
              <Text style={styles.bottomtext}>Forgot Password</Text>
            </TouchableOpacity>

            <Custombutton
              welcome={false}
              navigate={home}
              bgColor="black"
              title={'Login'}
              width={285}
              mt={40}
              br={8}
            />
            <TouchableOpacity onPress={register}>
              <Text style={styles.bottomtext}>SIGN UP</Text>
            </TouchableOpacity>
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
  innercontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
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
    marginTop: 35,
    fontWeight: '400',
    marginLeft: 5,
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
  bottomview: {alignItems: 'center', marginTop: 5},
  eye: {height: 13, width: 18, marginTop: 20},
  bottomtext: {
    color: '#303030',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
  },
});
export default Login;
