import 'react-native-gesture-handler' 
import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
 import Login  from './screens/Login';
 import Register from './screens/Register';
 import BottomNav from './screens/BottomNav';
 import Dashboard from './screens/Dashboard';
 import Cart from './screens/Cart';
import Notifications from './screens/Notifications';
 import Checkout from './screens/Checkout';
import Profile from './screens/Profile';
import DetailScreen from './screens/DetailScreen';
import MyCart from './screens/MyCart';
import Success from './screens/Success';
import Rating from './screens/Rating';
import Myorder from './screens/Myorder';
import Shipping from './screens/Shipping';
import Myreview from './screens/Myreview';
import Settings from './screens/Settings';
import Payment from './screens/Payment';
import AddAd from './screens/AddAd';
import Addpay from './screens/Addpay';
  
const App = () => {
  const Stack=createStackNavigator();
  console.disableYellowBox = true;
  return (
    
    <NavigationContainer> 
     <Stack.Navigator  screenOptions={{headerShown:false}} > 
     <Stack.Screen name="Home" component={Home}/>
     <Stack.Screen name="Login" component={Login}/>
     <Stack.Screen name="Register" component={Register}/>
     <Stack.Screen name="Cart" component={Cart}/>
     <Stack.Screen name="<MyCart>" component={MyCart}/>
     <Stack.Screen name="Checkout" component={Checkout}/>

     <Stack.Screen name="BottomNav" component={BottomNav}/>
     <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="DetailScreen" component={DetailScreen}/>
     <Stack.Screen name="MyCart" component={MyCart}/>
     <Stack.Screen name="Notifications" component={Notifications}/>
     <Stack.Screen name="Profile" component={Profile}/>
     <Stack.Screen name="Success" component={Success}/>
     <Stack.Screen name="Rating" component={Rating}/>
     <Stack.Screen name="Myorder" component={Myorder}/>
     <Stack.Screen name="Shipping" component={Shipping}/>
     <Stack.Screen name="Myreview" component={Myreview}/>
     <Stack.Screen name="Settings" component={Settings}/>
     <Stack.Screen name="Payment" component={Payment}/>
     <Stack.Screen name="AddAd" component={AddAd}/>
     <Stack.Screen name="Addpay" component={Addpay}/>

     </Stack.Navigator>
     </NavigationContainer>
    )
  }
export default App;
