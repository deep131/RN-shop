import React from 'react';
import {  View, FlatList, StyleSheet, Text, Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Custombutton from '../components/Custombutton';
import { style } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

const DATA = [
  {
    image:require('../images/cartimg1.png'),
    image2:require('../images/cancel.png'),
    image3:require('../images/bag2.png'),
    title: 'Coffee Table',
    price:'$ 50.00'
  },
  {
    image:require('../images/cartimg2.png'),
    image2:require('../images/cancel.png'),
    image3:require('../images/bag2.png'),
    title: 'Coffee Chair',
    price:'$ 20.00'
  },
  {
    image:require('../images/cartimg3.png'),
    image2:require('../images/cancel.png'),
    image3:require('../images/bag2.png'),
    title: 'Minimal Stand',
    price:'$ 25.00'
  },
  {
    image:require('../images/cartimg4.png'),
    image2:require('../images/cancel.png'),
    image3:require('../images/bag2.png'),

    title: 'Minimal Desk',
    price:'$ 50.00'
  },
  {
    image:require('../images/cartimg5.png'),
    image2:require('../images/cancel.png'),
 image3:require('../images/bag2.png'),

    title: 'Minimal Lamp',
    price:'$ 12.00'
  },
 
];

const Item = ({ title,price,image,image2,image3 }) => (
    <View>
  <View style={{flexDirection:'row'}}>
    
    <Image style={styles.productimg}                                                           
    source={image}
/>
<View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.amount}>{price}</Text>
    </View>
    <View>
<Image style={styles.cancelimg}                                                                
    source={image2}
/>
<Image   style={styles.bag}                                                           
    source={image3}
/>

</View>

  </View>
  <View style={styles.line}></View>
  </View>
);

const Cart = () => {
    const navigation = useNavigation();
    const oncart=()=>{
        navigation.navigate('MyCart')
    }

  const renderItem = ({ item }) => (
    <Item title={item.title} price={item.price} image={item.image} image2={item.image2} image3={item.image3}
    />
  );

  return (
    
    <View style={styles.container}>
             <View style={styles.header}>
        <Image
          style={styles.headimg}
          source={require('../images/search.png')}
        ></Image>

          <Text style={styles.headtext}>
         Favorites
          </Text>
         

        <Image
          style={styles.headimg}
          source={require('../images/cart.png')}
        ></Image>
      </View>
   
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />

          {/* <TouchableOpacity onPress={oncart}>
    <View style={{backgroundColor:'#242424',borderRadius:8,height:50,width:334,alignItems:'center',justifyContent:'center',marginLeft:16}}>
        <Text style={{color:'white',alignItems:'center',justifyContent:'center',fontSize:18,fontWeight:'600'}}>Add all to my cart</Text>
    </View>
</TouchableOpacity> */}<Custombutton welcome={false} navigate={oncart} bgColor="black" title={"Add all to my cart"} width={334} br={8} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
backgroundColor:'white',
    flex: 1,
    marginBottom:20
  
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,fontWeight:'600',marginLeft:20,marginTop:20
  },
  amount:{fontSize:16,fontWeight:'700',color:'#242424',marginLeft:20,marginTop:5},
  productimg:{height:100,width:100,marginLeft:20,marginTop:20},
  cancelimg:{height:20,width:20,marginLeft:100,marginTop:22},
  bag:{height:34,width:34,marginLeft:90,marginTop:46},
  line:{borderWidth:0.5,height:1,width:334,borderRadius:10,marginLeft:10,marginTop:12,backgroundColor:'grey',marginBottom:10},
header:{flexDirection: 'row', alignItems: 'center', marginTop:40,justifyContent:'space-around'},
headimg:{height: 22, width: 24},
headtext:{ fontSize: 18, fontWeight: '700',color:'black'}

});

export default Cart;