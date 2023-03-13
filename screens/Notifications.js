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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    image: require('../images/cartimg1.png'),

    title: 'Your order #123456789 has been confirmed',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },
  {
    image: require('../images/cartimg2.png'),

    title: 'Your order #123456789 has been canceled',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },
  {
    image: require('../images/cartimg1.png'),
    title: 'Discover hot sale furnitures this week.',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },
  {
    image: require('../images/cartimg4.png'),

    title: 'Your order #123456789 has been shipped successfully',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },
  {
    image: require('../images/cartimg5.png'),

    title: 'Your order #123456789 has been confirmed',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },
  {
    image: require('../images/cartimg1.png'),

    title: 'Your order #123456789 has been canceled',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },

  {
    image: require('../images/cartimg2.png'),

    title: 'Your order #123456789 has been shipped successfully',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },

  {
    image: require('../images/cartimg3.png'),

    title: 'Your order #123456789 has been shipped successfully',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },

  {
    image: require('../images/cartimg4.png'),

    title: 'Your order #123456789 has been shipped successfully',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },

  {
    image: require('../images/cartimg5.png'),

    title: 'Your order #123456789 has been shipped successfully',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },

  {
    image: require('../images/cartimg1.png'),

    title: 'Your order #123456789 has been shipped successfully',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },

  {
    image: require('../images/cartimg2.png'),

    title: 'Your order #123456789 has been shipped successfully',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },

  {
    image: require('../images/cartimg3.png'),

    title: 'Your order #123456789 has been shipped successfully',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },

  {
    image: require('../images/cartimg5.png'),

    title: 'Your order #123456789 has been shipped successfully',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },

  {
    image: require('../images/cartimg4.png'),

    title: 'Your order #123456789 has been shipped successfully',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
  },
];

const Item = ({title, subtitle, image,}) => (
  <View>
    <View style={{flexDirection: 'row'}}>
      <Image style={styles.img} source={image} />
      <View style={{width: 270}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.smalltext}>{subtitle}</Text>
      </View>
      <View></View>
    </View>
  </View>
);

const Notifications = () => {
  const navigation = useNavigation();
  const oncart = () => {
    navigation.navigate('MyCart');
  };

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      subtitle={item.subtitle}
      image={item.image}
      image2={item.image2}
      image3={item.image3}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headimg}
          source={require('../images/search.png')}
        ></Image>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.headtext}>Notification</Text>
        </View>
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
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 20,
    marginTop: 20,
    color: 'black',
  },
  img: {height: 70, width: 70, marginLeft: 20, marginTop: 20},
  smalltext: {
    fontSize: 10,
    fontWeight: '400',
    color: '#242424',
    marginLeft: 10,
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'white',
    paddingBottom: 20,
    paddingTop: 10,
  },
  headimg: {height: 22, width: 24, marginLeft: 22},
  headtext: {
    marginLeft: 90,
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
});

export default Notifications;
