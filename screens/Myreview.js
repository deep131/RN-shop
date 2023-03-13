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
const DATA = [
  {
    image: require('../images/cartimg2.png'),
    image2: require('../images/icstar.png'),
    name: 'Coffee Table',
    detail:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
    date: '20/03/2020',

    price: '$50.00',
  },
  {
    image: require('../images/cartimg3.png'),
    image2: require('../images/icstar.png'),
    name: 'Coffee Table',

    detail:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
    date: '20/03/2020',

    price: '$50.00',
  },
  {
    image: require('../images/cartimg4.png'),
    image2: require('../images/icstar.png'),
    name: 'Coffee Table',
    detail:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',

    date: '20/03/2020',

    price: '$50.00',
  },
  {
    image: require('../images/cartimg1.png'),
    image2: require('../images/icstar.png'),
    detail:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
    date: '20/03/2020',

    price: '$50.00',
    name: 'Coffee Table',
  },
  {
    image: require('../images/cartimg5.png'),
    image2: require('../images/icstar.png'),
    name: 'Coffee Table',
    detail:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
    date: '20/03/2020',

    price: '$50.00',
  },
  {
    image: require('../images/cartimg2.png'),
    image2: require('../images/icstar.png'),
    name: 'Coffee Table',
    detail:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
    date: '20/03/2020',

    price: '$50.00',
  },
];
const Item = ({detail, date, image, image2, name, price}) => (
  <View style={styles.card}>
    <View style={styles.innercard}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{price}</Text>
      </View>
    </View>

    <View style={styles.innerview}>
      <Image style={styles.stars} source={image2} />

      <Image style={styles.stars} source={image2} />

      <Image style={styles.stars} source={image2} />

      <Image style={styles.stars} source={image2} />

      <Image style={styles.stars} source={image2} />

      <Text style={styles.date}>{date}</Text>
    </View>

    <Text style={styles.detail}>{detail}</Text>
  </View>
);
const Myreview = () => {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('Profile');
  };

  const renderItem = ({item}) => (
    <Item
      name={item.name}
      detail={item.detail}
      date={item.date}
      image={item.image}
      image2={item.image2}
      price={item.price}
    />
  );

  return (
    <View style={{paddingBottom: 100}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <Image
            style={styles.headimg}
            source={require('../images/back3.png')}
          ></Image>
        </TouchableOpacity>

        <Text style={styles.headtext2}>My review</Text>

        <TouchableOpacity>
          <Image
            style={styles.headimg1}
            source={require('../images/search.png')}
          ></Image>
        </TouchableOpacity>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {height: 70, width: 70, marginLeft: 20, marginTop: 10},
  innercard: {alignItems: 'center', flexDirection: 'row'},
  card: {
    backgroundColor: 'white',
    width: 325,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 8,
  },
  text: {
    marginLeft: 18,
    fontSize: 14,
    fontWeight: '600',
    color: '#242424',
  },
    stars: {height: 16, marginLeft: 5, width: 16},

  innerview: {flexDirection: 'row', marginLeft: 18, marginTop: 5},
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
    height: 16,
    width: 7,
  },
  headimg1: {
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
  detail: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 18,
    marginTop: 15,
    paddingBottom: 20,
  },
  date: {
    fontSize: 12,
    fontWeight: '400',

    marginLeft: 120,
  },
});
export default Myreview;
