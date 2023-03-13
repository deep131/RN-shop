import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Custombutton from '../components/Custombutton';
const DATA = [
  {
    image: require('../images/cartimg1.png'),
    image2: require('../images/cancel.png'),

    image4: require('../images/plus.png'),
    image5: require('../images/minus.png'),
    title: 'Coffee Table',
    price: '$ 50.00',
  },
  {
    image: require('../images/cartimg2.png'),
    image2: require('../images/cancel.png'),

    image4: require('../images/plus.png'),
    image5: require('../images/minus.png'),
    title: 'Coffee Chair',
    price: '$ 20.00',
  },
  {
    image: require('../images/cartimg3.png'),
    image2: require('../images/cancel.png'),

    image4: require('../images/plus.png'),
    image5: require('../images/minus.png'),
    title: 'Minimal Stand',
    price: '$ 25.00',
  },
  {
    image: require('../images/cartimg4.png'),
    image2: require('../images/cancel.png'),

    image4: require('../images/plus.png'),
    image5: require('../images/minus.png'),
    title: 'Minimal Desk',
    price: '$ 50.00',
  },
  {
    image: require('../images/cartimg5.png'),
    image2: require('../images/cancel.png'),
    image3: require('../images/bag2.png'),
    image4: require('../images/plus.png'),
    image5: require('../images/minus.png'),

    title: 'Minimal Lamp',
    price: '$ 12.00',
  },
];

const Item = ({title, price, image, image2, image4, image5}) => (
  <View>
    <View style={{flexDirection: 'row'}}>
      <Image style={styles.productimg} source={image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>{price}</Text>
        <View style={styles.card}>
          <TouchableOpacity>
            <Image style={styles.plus} source={image4} />
          </TouchableOpacity>

          <Text style={styles.num}>01</Text>
          <TouchableOpacity>
            <Image style={styles.minus} source={image5} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Image style={styles.cancelimg} source={image2} />
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.line}></View>
  </View>
);

const MyCart = () => {
  const navigation = useNavigation();
  const checkout = () => {
    navigation.navigate('Checkout');
  };
  const back = () => {
    navigation.navigate('Cart');
  };

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      price={item.price}
      image={item.image}
      image2={item.image2}
      image3={item.image3}
      image4={item.image4}
      image5={item.image5}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <Image
            style={styles.headimg}
            source={require('../images/back3.png')}
          ></Image>
        </TouchableOpacity>
        <View>
          <Text style={styles.headtext}>My cart</Text>
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.bottomview}>
        <TextInput
          style={styles.textinput}
          placeholder="Enter your promo code"
        ></TextInput>
        <TouchableOpacity>
          <View style={styles.bottomnestesview}>
            <Image
              style={styles.goimg}
              source={require('../images/go.png')}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomnestesview2}>
        <Text style={styles.bottomtext1}>Total:</Text>
        <Text style={styles.bottomtext2}>$95.00</Text>
      </View>

      <Custombutton
        welcome={false}
        navigate={checkout}
        bgColor="black"
        title={'Check out'}
        width={334}
        mt={20}
        br={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 20,
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
    marginLeft: 120,
    fontSize: 18,

    fontWeight: '700',
    color: 'black',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 20,
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#242424',
    marginLeft: 20,
    marginTop: 5,
  },
  productimg: {height: 100, width: 100, marginLeft: 20, marginTop: 20},
  cancelimg: {height: 20, width: 20, marginLeft: 100, marginTop: 22},
  plus: {height: 24, width: 24},
  minus: {height: 24, width: 24},
  num: {color: 'black', marginLeft: 10, marginRight: 10, marginTop: 3},
  card: {flexDirection: 'row', marginTop: 23, marginLeft: 20},
  goimg: {height: 16, width: 8},
  bottomview: {flexDirection: 'row', marginTop: 20, borderRadius: 10},
  textinput: {
    borderRadius: 10,
    height: 44,
    width: 285,
    marginLeft: 20,
    backgroundColor: 'white',
  },
  bottomnestesview: {
    backgroundColor: '#242424',
    borderRadius: 8,
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomnestesview2: {flexDirection: 'row', marginTop: 10},
  bottomtext1: {
    color: '#808080',
    height: 27,
    width: 51,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '700',
  },
  bottomtext2: {
    color: 'black',
    height: 27,
    width: 51,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 200,
  },

  line: {
    borderWidth: 0.5,
    height: 1,
    width: 334,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 12,
    backgroundColor: 'grey',
    marginBottom: 10,
  },
});

export default MyCart;
