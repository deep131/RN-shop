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
import Custombutton from '../components/Custombutton';
const DATA = [
  {
    image: require('../images/person1.png'),
    image2: require('../images/icstar.png'),
    name: 'Bruno Fernandes',
    detail:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
    date: '20/03/2020',
  },
  {
    image: require('../images/person2.png'),
    image2: require('../images/icstar.png'),
    name: 'Tracy Mosby',

    detail:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
    date: '20/03/2020',
  },
  {
    image: require('../images/person3.png'),
    image2: require('../images/icstar.png'),
    name: 'Bruno Fernandes',
    detail:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',

    date: '20/03/2020',
  },
  {
    image: require('../images/person1.png'),
    image2: require('../images/icstar.png'),
    detail:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
    date: '20/03/2020',
    name: 'Bruno Fernandes',
  },
  {
    image: require('../images/person2.png'),
    image2: require('../images/icstar.png'),
    name: 'Deep Bhatt',
    detail:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
    date: '20/03/2020',
  },
  {
    image: require('../images/person3.png'),
    image2: require('../images/icstar.png'),
    name: 'Deep Bhatt',
    detail:
      'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
    date: '20/03/2020',
  },
];
const Item = ({detail, date, image, image2, name}) => (
  <View style={styles.card}>
    <View style={{alignItems: 'center'}}>
      <Image style={styles.profileicon} source={image} />
    </View>

    <View style={{flexDirection: 'row'}}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
    <View style={styles.starview}>
      <Image style={styles.star} source={image2} />

      <Image style={styles.star} source={image2} />

      <Image style={styles.star} source={image2} />

      <Image style={styles.star} source={image2} />

      <Image style={styles.star} source={image2} />
    </View>

    <Text style={styles.content}>{detail}</Text>
  </View>
);
const Rating = () => {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('Success');
  };

  const renderItem = ({item}) => (
    <Item
      name={item.name}
      detail={item.detail}
      date={item.date}
      image={item.image}
      image2={item.image2}
    />
  );

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <Image
            style={styles.headimg}
            source={require('../images/back3.png')}
          ></Image>
        </TouchableOpacity>

        <Text style={styles.headtext}>Rating & Review</Text>
      </View>
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={require('../images/cartimg1.png')}
        ></Image>
        <View style={styles.subview}>
          <Text style={styles.htext1}>Minimal Stand</Text>
          <View style={styles.headstarview}>
            <Image
              style={styles.bigstar}
              source={require('../images/icstar.png')}
            ></Image>
            <Text style={styles.htext2}>4.5</Text>
          </View>
          <Text style={styles.htext3}>10 reviews</Text>
        </View>
      </View>
      <View style={styles.line}></View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Custombutton
        bgColor="black"
        title={'Write a review'}
        width={334}
        mt={-270}
        br={8}
        height={50}
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
  headimg: {height: 16, width: 7, marginLeft: 23, marginBottom: 10},
  headtext: {
    marginLeft: 90,
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  view: {flexDirection: 'row', backgroundColor: 'white'},
  image: {height: 100, width: 100, marginLeft: 20, marginTop: 20},
  subview: {marginTop: 20, marginLeft: 20},
  bigstar: {height: 20, width: 20},
  htext1: {color: 'black'},
  htext2: {fontSize: 24, fontWeight: '700', color: 'black'},
  htext3: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginTop: 13,
    paddingBottom: 10,
  },
  line: {
    borderWidth: 0.3,
    backgroundColor: 'grey',
    width: 335,
    alignItems: 'center',
    alignSelf: 'center',
  },
  headstarview: {flexDirection: 'row', marginTop: 14},
  card: {
    backgroundColor: 'white',
    width: 325,
    alignSelf: 'center',
    marginTop: 35,
    borderRadius: 8,
  },
  profileicon: {height: 40, width: 40, marginLeft: 20, marginTop: -20},
  name: {
    marginLeft: 23,
    fontSize: 14,
    fontWeight: '600',
    color: '#242424',
  },
  date: {
    fontSize: 12,
    fontWeight: '400',

    marginLeft: 120,
    marginTop: 5,
  },
  starview: {flexDirection: 'row', marginLeft: 18, marginTop: 5},
  star: {height: 16, marginLeft: 5, width: 16},
  content: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 18,
    marginTop: 15,
    paddingBottom: 20,
  },
});
export default Rating;
