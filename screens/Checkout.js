import React from "react";
import { View ,TouchableOpacity,Image,Text, TextInput} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Custombutton from "../components/Custombutton";
const Checkout=()=>{

    const navigation = useNavigation();
    const back=()=>{
        navigation.navigate('MyCart')
    }
    const success=()=>{
        navigation.navigate('Success')
    }
    return(                                                                                                                                      
        <View>
              <View style={{flexDirection: 'row', alignItems: 'center',backgroundColor:'white',paddingTop:40,paddingBottom:10}}>
              <TouchableOpacity onPress={back}>
        <Image
          style={{height: 17, width: 9, marginLeft: 23,marginBottom:10}}
          source={require('../images/back3.png')}
        ></Image>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={{marginLeft: 120, fontSize: 18, fontWeight: '700',color:'black'}}>
Checkout
          </Text>
         
        </View>
  
      </View>
      <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{fontSize:18,fontWeight:'600',marginLeft:22}}>Shipping Address</Text>
<Image style={{width:16,height:20,marginLeft:160}} source={require('../images/edit.png')}></Image>
      </View>
   <View style={{backgroundColor:'white',marginLeft:20,marginTop:15,paddingTop:15,paddingBottom:10,width:325,borderRadius:8}}>
    <Text style={{fontWeight:'700',fontSize:18,color:'#303030',marginLeft:20}}> Bruno Fernandes</Text>
    <View style={{borderWidth:0.3,width:325,marginTop:10,}}></View>
    <Text style={{fontWeight:'400',fontSize:14,color:'#808080',marginLeft:20,marginTop:10}}> 25 rue Robert Latouche, Nice, 06200, Côte</Text>
    <Text style={{fontWeight:'400',fontSize:14,color:'#808080',marginLeft:20,paddingBottom:15}}> Bruno Fernandes</Text>

   </View>
   <View style={{flexDirection:'row',marginTop:30}}>
        <Text style={{fontSize:18,fontWeight:'600',marginLeft:22}}>Payment</Text>
<Image style={{width:16,height:20,marginLeft:225}} source={require('../images/edit.png')}></Image>
      </View>

           <View style={{flexDirection:'row',marginTop:10,backgroundColor:'white',borderRadius:8,width:325,marginLeft:20}}>
      
            <View style={{backgroundColor:'white',borderRadius:8,paddingLeft:16,paddingRight:16,paddingTop:20,marginLeft:10}}>  
                <Image style={{width:32,height:25}} source={require('../images/mastercard.png')}></Image>
            </View>
            <TextInput style={{marginLeft:17,fontWeight:'600',paddingTop:20,paddingBottom:18}}>**** **** **** 3947</TextInput>

            </View> 



      <View style={{flexDirection:'row',marginTop:30}}>
        <Text style={{fontSize:16,fontWeight:'600',marginLeft:22}}>Delivery method</Text>
<Image style={{width:16,height:20,marginLeft:178}} source={require('../images/edit.png')}></Image>
      </View>
      
      <View style={{flexDirection:'row',marginTop:10,backgroundColor:'white',borderRadius:8,width:325,marginLeft:20}}>
      
      <View style={{backgroundColor:'white',borderRadius:8,paddingLeft:16,paddingRight:16,paddingTop:10,marginLeft:10}}>  
          <Image style={{width:88,height:20,marginTop:8}} source={require('../images/dhl.png')}></Image>
      </View>
      <Text style={{marginLeft:15,fontWeight:'600',color:'black',paddingTop:18,paddingBottom:17}}>Fast (2-3days)</Text>

      </View>
      <View style={{marginTop:38,backgroundColor:'white',borderRadius:8,width:325,marginLeft:20}}>
      <View style={{flexDirection:'row',marginTop:15}}>
        <Text style={{fontSize:18,fontWeight:'400',marginLeft:15}}>
        Order: 
        </Text>
        <Text style={{fontSize:18,fontWeight:'600',color:'black',marginLeft:180}}>
        $ 95.00
            </Text>

        </View> 
        <View style={{flexDirection:'row',marginTop:15}}>
        <Text style={{fontSize:18,fontWeight:'400',marginLeft:15}}>
        Delivery:
        </Text>
        <Text style={{fontSize:18,fontWeight:'600',color:'black',marginLeft:160}}>
        $ 5.00
            </Text>

        </View> 
        <View style={{flexDirection:'row',marginTop:15,marginBottom:15}}>
        <Text style={{fontSize:18,fontWeight:'400',marginLeft:15}}>
        Total:
        </Text>
        <Text style={{fontSize:18,fontWeight:'600',color:'black',marginLeft:180}}>
        $ 100.00
            </Text>

        </View> 
        
        </View>
     
<Custombutton welcome={false} navigate={success} bgColor="black" title={"SUBMIT ORDER"} width={334} mt={20} br={8}/>
        </View>
    )
}
export default Checkout