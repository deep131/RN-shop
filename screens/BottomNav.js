import React, { StatusBar } from 'react';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import Dashboard from './Dashboard';
import Cart from './Cart';
import { StyleSheet } from 'react-native';

import Profile from './Profile';

import { View,Image } from 'react-native';
import Notifications from './Notifications';




  const Tab=createBottomTabNavigator();

const BottomNav=()=>{
   

    return(
   
        

  
<Tab.Navigator screenOptions={{headerShown:false,activeTintColor:'#2c2c2c' , inactiveTintColor: 'red',}}>
    

    <Tab.Screen name='        ' component={Dashboard} options={{
 tabBarIcon: ({focused, horizontal, tintColor}) => (
    <Image
      fadeDuration={0}
      style={styles.image}
      source={require('../images/homeicon.png')}
    />
  ),}}/>
    <Tab.Screen name='     ' component={Cart} options={{
 tabBarIcon: ({focused, horizontal, tintColor}) => (

    <Image
      fadeDuration={0}
      style={styles.image}
      source={require('../images/icfav.png')}
    />
  ),}}/ >
    <Tab.Screen name='    ' component={Notifications} options={{
 tabBarIcon: ({focused}) => (

    <Image
      fadeDuration={0}
      style={styles.image}
      source={require('../images/icbell.png')}
    />
  ),

  }}/>
    <Tab.Screen name='   ' component={Profile}  options={{
 tabBarIcon: ({focused, horizontal, tintColor}) => (

    <Image
      fadeDuration={0}
      style={styles.image}
      source={require('../images/icprofile.png')}
    />
  ),}}/>

  
</Tab.Navigator>

    );
};
const styles=StyleSheet.create({
  image:{width: 22, height: 22}

})

export default BottomNav;