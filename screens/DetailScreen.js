import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Custombutton from '../components/Custombutton';
const DetailScreen = () => {
  const navigation = useNavigation();
  const cart = () => {
    navigation.navigate('Cart');
  };
  const back = () => {
    navigation.navigate('Dashboard');
  };
  return (
    <View>
      <ImageBackground
        style={styles.bgimg}
        source={require('../images/deimg1.png')}
      >
        <TouchableOpacity onPress={back}>
          <Image
            style={styles.backimg}
            source={require('../images/back.png')}
          ></Image>
        </TouchableOpacity>
        <View style={styles.roundimgview}>
          <TouchableOpacity>
            <Image
              style={styles.roundimg}
              source={require('../images/r1.png')}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.roundimg}
              source={require('../images/r2.png')}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.roundimg}
              source={require('../images/r3.png')}
            ></Image>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <Text style={styles.text}>Minimal Stand</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.amount}>$ 50</Text>

        <TouchableOpacity>
          <Image
            style={styles.plus}
            source={require('../images/plus.png')}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.num}>01</Text>
        <TouchableOpacity>
          <Image
            style={styles.minus}
            source={require('../images/minus.png')}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.starview}>
        <Image
          style={styles.star}
          source={require('../images/icstar.png')}
        ></Image>
        <Text style={styles.review}>4.5</Text>
        <Text style={styles.reviewtext}>(50 reviews)</Text>
      </View>
      <View style={styles.textview}>
        <Text style={styles.textcolor}>
          Minimal Stand is made of by natural wood. The
        </Text>
        <Text style={styles.textcolor}>
          design that is very simple and minimal. This is truly
        </Text>
        <Text style={styles.textcolor}>
          one of the best furnitures in any family for now. With
        </Text>
        <Text style={styles.textcolor}>
          3 different colors, you can easily select the best{' '}
        </Text>
        <Text style={styles.textcolor}>match for your home.</Text>
      </View>

      <View style={styles.bottomview}>
        <TouchableOpacity style={styles.bottomtopacity}>
          <Image
            style={styles.bottoming}
            source={require('../images/newsave.png')}
          ></Image>
        </TouchableOpacity>
        <Custombutton
          navigate={cart}
          bgColor="black"
          title={'Add to cart'}
          width={246}
          br={8}
          ml={15}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textcolor: {
    color: '#606060',
  },
  textview: {marginLeft: 25, marginTop: 10},
  bottomview: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  bottoming: {
    height: 20,
    width: 16,
  },
  bottomtopacity: {
    borderRadius: 8,
    backgroundColor: '#F8F0E3',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    marginLeft: 25,
  },
  bgimg: {height: 460, width: 320, marginLeft: 60},
  backimg: {marginTop: 20, marginLeft: -60, height: 130, width: 130},
  roundimgview: {
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 200,
    width: 60,
    borderRadius: 40,
    marginLeft: -20,
    alignItems: 'center',
  },
  roundimg: {height: 40, width: 40, marginTop: 20},
  text: {fontSize: 24, fontWeight: '500', marginTop: 15, marginLeft: 25},
  amount: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 10,
    marginLeft: 25,
    color: '#303030',
  },
  plus: {height: 30, width: 30, marginLeft: 157, marginTop: 15},
  minus: {height: 30, width: 30, marginTop: 15},
  num: {marginTop: 20, marginLeft: 15, marginRight: 15},
  starview: {flexDirection: 'row', marginTop: 10, marginLeft: 25},
  reviewtext: {
    fontSize: 14,
    fontWeight: '600',
    color: ' #808080',
    marginLeft: 20,
    marginTop: 3,
  },
  star: {height: 20, width: 20, marginTop: 2},
  review: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginLeft: 10,
  },
});
export default DetailScreen;
