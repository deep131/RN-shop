import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Dashboard = () => {
  const navigation = useNavigation();
  
  const click = () => {
    navigation.navigate('DetailScreen')

    console.log('clicked');
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#ffffff"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
     
      <View >
  
      <View style={styles.headerview}>
        <Image
          style={styles.headimg}
          source={require('../images/search.png')}
        ></Image>
        <View >
          <Text style={styles.headtext}>
            Make Home
          </Text>
          <Text
            style={styles.headtext2}
          >
            BEAUTIFUL
          </Text>
        </View>
        <Image
          style={styles.headimg}
          source={require('../images/cart.png')}
        ></Image>
      </View>
      <ScrollView>
      <View style={{marginTop: 20}}>
     
        <ScrollView horizontal={true}>
          <TouchableOpacity>
            <Image
              style={styles.scrollimg}
              source={require('../images/star.png')}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.scrollimg}
              source={require('../images/chair.png')}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.scrollimg}
              source={require('../images/table.png')}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.scrollimg}
              source={require('../images/armchair.png')}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.scrollimg}
              source={require('../images/bed.png')}
            ></Image>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', alignSelf:'center'}}>
          <View>
            
          <TouchableOpacity onPress={click}>
            <Image
              source={require('../images/img1.png')}
              style={styles.image}
            ></Image>
</TouchableOpacity>

            <TouchableOpacity style={styles.topacity} >
              <Image
                style={styles.bag}
                source={require('../images/bag.png')}
              ></Image>
            </TouchableOpacity>
          </View>
          <View>
            
            <TouchableOpacity >
              <Image
                source={require('../images/img2.png')}
                style={styles.image}
              ></Image>
  </TouchableOpacity>
  
              <TouchableOpacity style={styles.topacity} >
                <Image
                  style={styles.bag}
                  source={require('../images/bag.png')}
                ></Image>
              </TouchableOpacity>
            </View>


        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View>
            <Text
              style={styles.product}
            >
              Black Simple Lamp
            </Text>
            <Text
              style={styles.price}
            >
              $ 12.00
            </Text>
          </View>
          <View style={{marginLeft: 30}}>
            <Text
              style={styles.product}
            >
              Minimal Stand
            </Text>
            <Text
              style={styles.price}
            >
              $ 25.00
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10}}>
        <View>
            
          <TouchableOpacity >
            <Image
              source={require('../images/img3.png')}
              style={styles.image}
            ></Image>
</TouchableOpacity>

            <TouchableOpacity style={styles.topacity} >
              <Image
                style={styles.bag}
                source={require('../images/bag.png')}
              ></Image>
            </TouchableOpacity>
          </View>
          <View>
            
            <TouchableOpacity >
              <Image
                source={require('../images/img4.png')}
                style={styles.image}
              ></Image>
  </TouchableOpacity>
  
              <TouchableOpacity style={styles.topacity} >
                <Image
                  style={styles.bag}
                  source={require('../images/bag.png')}
                ></Image>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text
              style={styles.product}
            >
              Coffee Chair
            </Text>
            <Text
              style={styles.price}
            >
              $ 20.00
            </Text>
          </View>
          <View style={{marginLeft: 70}}>
            <Text
              style={styles.product}
            >
              Simple Desk
            </Text>
            <Text
              style={styles.price}
            >
              $ 50.00
            </Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
    
    </View>
  );
};
const styles = StyleSheet.create({

  container:{
    flex: 1, backgroundColor: 'white'
  },headerview:{flexDirection: 'row', alignItems: 'center', marginTop:40,justifyContent:'space-around'},
  scrollimg: {
    height: 44,
    width: 44,
    marginLeft: 25,
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    width: 157,
    marginLeft: 10,
  },
  headimg:{
    height: 22, width: 24
  },
  headtext:{
    fontSize: 18, fontWeight: '700'
  },headtext2:{
    fontSize: 18,alignSelf:'center',
    fontWeight: '700',
    color: '#242424',
  },
  price:{
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
    marginLeft: 20,
  },
product:{   fontSize: 14,
  fontWeight: '400',
  marginLeft: 20,
  marginTop: 10,
},
bag:{
  height: 30,
  width: 30,
  borderRadius: 6,
},
topacity:{
  position: 'absolute',
  zIndex: 20,
  alignSelf:'flex-end',
  bottom:10,
  right:10}

});
export default Dashboard;
