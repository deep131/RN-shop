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

const Myorder = () => {
  const navigation = useNavigation();

  const back = () => {
    navigation.navigate('Profile');
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
        <TouchableOpacity onPress={back}>
          <Image
            style={styles.headimg}
            source={require('../images/back3.png')}
          ></Image>
        </TouchableOpacity>

        <Text style={styles.headtext}>My orders</Text>
      </View>

      <FlatList
        style={styles.flatlist}
        data={[
          {
            name: 'Order No: 238562312',

            date: '20/02/2022',
            quantity: '03',
            amount: '$150',
            status: 'Delivered',
          },
          {
            name: 'Order No: 238562312',

            date: '20/02/2022',
            quantity: '03',
            amount: '$150',
            status: 'Delivered',
          },
          {
            name: 'Order No: 238562312',

            date: '20/02/2022',
            quantity: '03',
            amount: '$150',
            status: 'Delivered',
          },
        ]}
        renderItem={({item}) => {
          console.log(item.name);
          return (
            <View>
              <View style={styles.card}>
                <TouchableOpacity onPress={() => move(item)}>
                  <View>
                    <View style={styles.cardinnerview}>
                      <Text style={styles.bold}>{item.name}</Text>
                      <Text style={styles.date}>{item.date}</Text>

                      <View style={styles.line}></View>
                    </View>
                    <View style={styles.upperview}>
                      <Text style={styles.quantity}>Quantity:</Text>
                      <Text style={styles.uppertext}>{item.quantity}</Text>
                      <Text style={styles.totalamout}>Total amount:</Text>
                      <Text style={styles.uppertext}>{item.amount}</Text>
                    </View>
                  </View>
                  <View style={styles.lowerview}>
                    <TouchableOpacity style={styles.topacity}>
                      <Text style={styles.btntxt}>Detail</Text>
                    </TouchableOpacity>
                    <Text style={styles.status}>{item.status}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );  
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  quantity: {fontSize: 16, fontWeight: '400'},
  upperview: {flexDirection: 'row', marginLeft: 20, marginTop: 15},
  totalamout: {fontSize: 16, fontWeight: '400', marginLeft: 63},
  uppertext: {fontSize: 16, fontWeight: '700', color: 'black', marginLeft: 5},
  lowerview: {flexDirection: 'row', alignItems: 'center', marginTop: 30},
  btntxt: {color: 'white', fontSize: 16},
  topacity: {
    backgroundColor: 'black',
    height: 36,
    width: 100,
    marginLeft: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {fontSize: 16, fontWeight: '400', color: 'green', marginLeft: 124},
  line: {
    height: 1,
    width: 335,
    borderRadius: 6,
    position: 'absolute',
    backgroundColor: '#F0F0F0',
    marginTop: 35,
  },
  cardinnerview: {flexDirection: 'row', marginTop: 15},
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
  bold: {
    fontSize: 16,
    fontWeight: '600',
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
  flatlist: {
    alignContent: 'center',
    marginTop: 20,
    width: 335,
    alignSelf: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 1,
    marginBottom: 10,
    marginTop: 15,
    height: 173,
  },
  date: {fontSize: 14, flexWeight: '400', marginLeft: 70},
});
export default Myorder;
