import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  const [switchOn, setSwitchOn] = useState(false);
  const [switchOff, setSwitchOff] = useState(false);
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('Profile');
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

          <Text style={styles.headtext}>Setting</Text>
        </View>
        <View style={styles.view1}>
          <Text style={styles.upperheadertext}>Personal Information</Text>
          <Image
            style={styles.editimg1}
            source={require('../images/edit.png')}
          ></Image>
        </View>
        <View style={styles.etview}>
          <Text style={styles.etinnertext}>Name</Text>
          <TextInput></TextInput>
        </View>
        <View style={styles.etview}>
          <Text style={styles.etinnertext}>Email</Text>
          <TextInput></TextInput>
        </View>

        <View style={styles.view2}>
          <Text style={styles.upperheadertext}>Password</Text>
          <Image
            style={styles.editimg2}
            source={require('../images/edit.png')}
          ></Image>
        </View>
        <View style={styles.etview}>
          <Text style={styles.etinnertext}>Card Number</Text>
          <TextInput></TextInput>
        </View>
        <Text style={styles.bottomheadtext}>Notifications</Text>

        <View style={styles.notificationviews}>
          <Text style={styles.innertv}>Sales</Text>
          <Switch
            style={styles.switch1}
            value={switchOn}
            onValueChange={() => setSwitchOn(!switchOn)}
          />
        </View>
        <View style={styles.notificationviews}>
          <Text style={styles.innertv}>New arrivals</Text>
          <Switch
            style={styles.switch2}
            value={switchOff}
            onValueChange={() => setSwitchOff(!switchOff)}
          />
        </View>

        <View style={styles.notificationviews}>
          <Text style={styles.innertv}>Delivery status changes</Text>
        </View>
        <Text style={styles.bottomheadtext}>Help Center</Text>
        <TouchableOpacity style={styles.faqview}>
          <Text style={styles.innertv}>FAQ</Text>

          <Image
            style={styles.faqimg}
            source={require('../images/blcgo.png')}
          ></Image>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  view1: {flexDirection: 'row', marginTop: 22, marginLeft: 20},
  view2: {flexDirection: 'row', marginTop: 22, marginLeft: 20},
  editimg2: {height: 20, width: 16, marginLeft: 228},
  editimg1: {height: 20, width: 16, marginLeft: 150},
  upperheadertext: {fontWeight: '600', fontSize: 16, color: '#909191'},
  etview: {
    backgroundColor: 'white',
    borderRadius: 4,
    marginTop: 15,
    marginLeft: 16,
    width: 335,
    height: 54,
    alignSelf: 'center',
    borderColor: '#DBDBDB',
    borderWidth: 1,
  },
  etinnertext: {
    fontSize: 12,
    fontFamily: '400',
    marginLeft: 8,
    color: '#808080',
  },
  switch1: {marginLeft: 222},
  switch2: {marginLeft: 170},
  faqview: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 335,
    height: 54,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 4,
    flexDirection: 'row',
  },
  faqimg: {height: 18, width: 10, marginLeft: 250},
  bottomheadtext: {
    fontWeight: '600',
    fontSize: 16,
    color: '#909191',
    marginLeft: 20,
    marginTop: 35,
  },
  notificationviews: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 335,
    height: 54,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 4,
  },
  innertv: {fontSize: 16, fontWeight: '600', color: 'black', marginLeft: 16},
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
    marginLeft: 120,
    fontSize: 18,

    fontWeight: '700',
    color: 'black',
  },
});
export default Settings;
