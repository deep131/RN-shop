import React from "react";
import { ImageBackground, StyleSheet, Text, View,StatusBar, Button, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Custombutton from "../components/Custombutton";

const Home = () => {
    const navigation = useNavigation();
    const login=()=>{
        navigation.navigate('Login')
    }

    return(

      

  <View style={styles.container}>
    <StatusBar  
                    backgroundColor = "#ffffff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                /> 

    <ImageBackground source={require('../images/homeimage.png')} style={styles.image}>
        <View style={styles.innerview}>
      <Text style={styles.text}>MAKE YOUR</Text>
      <Text style={styles.text2}>HOME BEAUTIFUL</Text>
      </View>
      <View style={styles.nestedview}>
      <Text style={styles.smallfont}>The best simple place where you </Text>
      <Text style={styles.smallfont}>discover most wonderful furnitures </Text>
      <Text style={styles.smallfont}>and make your home beautiful </Text>


<Custombutton  navigate={login} bgColor="black" title={"Get Started"} width={157} mt={140} br={8}/>


      </View>
    </ImageBackground>
  </View>
    )
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode:'contain',
    height:'100%',width:'100%'
    
  },
  text: {
    color: '#606060',
    fontSize: 24,
   
 
marginLeft:50

  },
  nestedview:{justifyContent:"center",alignItems:"center",marginTop:35},
  text2:{fontSize:30,marginLeft:50,fontWeight: "bold"},
  smallfont:{
    color:'#808080',
    fontSize:18,
    fontWeight:'400',
    paddingBottom:10
  },innerview:{marginTop:230},
});

export default Home;