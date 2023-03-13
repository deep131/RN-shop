import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Profile = () => {
  const navigation = useNavigation();
  const login = () => {
    navigation.navigate('Login');
  };
  const move = item => {
    console.log(item.name);

    if (item.name == 'My orders') {
      console.log('item', item.name);
      navigation.navigate('Myorder');
    } else if (item.name == 'Shipping Addresses') {
      console.log('item', item.name);
      navigation.navigate('Shipping');
    } else if (item.name == 'Payment Method') {
      console.log('item', item.name);
      navigation.navigate('Payment');
    } else if (item.name == 'My reviews') {
      console.log('item', item.name);
      navigation.navigate('Myreview');
    } else if (item.name == 'Setting') {
      console.log('item', item.name);
      navigation.navigate('Settings');
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <Image
          style={styles.headimg}
          source={require('../images/search.png')}
        ></Image>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.headtext2}>Profile</Text>
        </View>
        <TouchableOpacity onPress={login}>
          <Image
            style={styles.headimg}
            source={require('../images/exit.png')}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.profileview}>
        <Image
          style={styles.profileimg}
          source={require('../images/profilepic.png')}
        ></Image>
        <View style={styles.profileinnerview}>
          <Text style={styles.profiletxt}>Bruno Pham</Text>
          <Text>bruno203@gmail.com</Text>
        </View>
      </View>
      <FlatList
        style={styles.flatlist}
        data={[
          {name: 'My orders', desc: 'Already have 10 orders'},
          {name: 'Shipping Addresses', desc: '03 Addresses'},
          {name: 'Payment Method', desc: 'You have 2 cards'},
          {name: 'My reviews', desc: 'Reviews for 5 items'},
          {name: 'Setting', desc: 'Notification, Password, FAQ, Contact'},
        ]}
        renderItem={({item}) => {
          console.log(item.name);
          return (
            <View style={styles.flatlistview}>
              <TouchableOpacity onPress={() => move(item)}>
                <View>
                  <View style={styles.blcgoview}>
                    <Image
                      style={styles.blcgo}
                      source={require('../images/blcgo.png')}
                    ></Image>
                  </View>
                  <Text style={styles.bold}>{item.name}</Text>
                  <Text style={styles.light}>{item.desc}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
    paddingTop: 20,
    justifyContent: 'space-around',
  },
  flatlist: {
    alignContent: 'center',
    marginTop: 20,
    width: 335,
    alignSelf: 'center',
  },
  headimg: {
    height: 22,
    width: 24,
  },
  headtext: {
    fontSize: 18,
    fontWeight: '700',
  },
  headtext2: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '700',
    color: '#242424',
  },
  blcgo: {
    height: 24,
    width: 14,
    marginLeft: 150,
    marginTop: 35,
  },
  blcgoview: {height: 20, marginLeft: 150},
  bold: {
    fontSize: 18,
    fontWeight: '700',
    color: '#262B2E',
    paddingBottom: 5,
    marginLeft: 20,
  },
  light: {
    fontSize: 12,
    fontWeight: '400',
    color: '#8A8D9F',
    marginTop: 5,
    marginLeft: 20,
    paddingBottom: 18,
  },
  flatlistview: {
    flexDirection: 'row',
    backgroundColor: 'white',

    marginBottom: 10,
  },
  profileview: {flexDirection: 'row', backgroundColor: '#FFFFFF'},
  profileinnerview: {marginLeft: 20, marginTop: 10},
  profileimg: {height: 80, width: 80, marginLeft: 20, marginBottom: 20},
  profiletxt: {fontSize: 20, fontWeight: '700', color: '#242424'},
});
export default Profile;
