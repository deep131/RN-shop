import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const Shipping = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigation = useNavigation();
  const addaddress = () => {
    navigation.navigate('AddAd');
  };
  const back = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={{flex:1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <Image
            style={styles.headimg}
            source={require('../images/back3.png')}
          ></Image>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.headtext}>Shipping address</Text>
        </View>
      </View>

      <FlatList
        style={styles.flatlist}
        data={[
          {
            name: 'Bruno Fernandes',
            address: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France',
          },
          {
            name: 'Bruno Fernandes',
            address: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France',
          },
          {
            name: 'Bruno Fernandes',
            address: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France',
          },
        ]}
        renderItem={({item}) => {
          console.log(item.name);
          return (
            <View>
              <View style={{flexDirection: 'row'}}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text style={styles.cbtext}>Use as the shipping address</Text>
              </View>
              <View style={styles.cardview}>
                <TouchableOpacity>
                  <View style={styles.card}>
                    <Image
                      style={styles.editimg}
                      source={require('../images/edit.png')}
                    ></Image>
                  </View>

                  <Text style={styles.bold}>{item.name}</Text>

                  <Text style={styles.light}>{item.address}</Text>
                  <View style={styles.line}></View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity style={styles.addview} onPress={addaddress}>
        <Image
          style={styles.addimage}
          source={require('../images/add2.png')}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {height: 20, marginLeft: 150, marginTop: 5},
  editimg: {
    height: 19,
    width: 16,
    marginLeft: 150,
    marginTop: 24,
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
  line: {
    height: 1,
    width: 335,
    borderRadius: 6,
    position: 'absolute',
    backgroundColor: '#F0F0F0',
    marginTop: 50,
  },
  cardview: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 1,
    marginBottom: 10,
    marginTop: 15,
    height: 127,
  },
  cbtext: {fontWeight: '400', fontSize: 18, color: '#242424s'},
  flatlist: {
    alignContent: 'center',
    marginTop: 20,
    width: 335,
    alignSelf: 'center',
  },
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
    marginLeft: 80,
    fontSize: 18,

    fontWeight: '700',
    color: 'black',
  },
  bold: {
    fontSize: 18,
    fontWeight: '700',
    color: '#262B2E',
    paddingBottom: 10,
    marginLeft: 20,
  },
  light: {
    fontSize: 16,
    fontWeight: '400',
    color: '#8A8D9F',
    marginTop: 5,
    marginLeft: 20,
    paddingBottom: 18,
  },
});
export default Shipping;
