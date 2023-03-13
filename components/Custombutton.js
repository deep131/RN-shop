import React from "react";
import { View ,TouchableOpacity,Text} from "react-native";
const Custombutton=({title,bgColor,navigate,width,mt,br,ml})=>{
    return(
        <View><TouchableOpacity onPress={navigate}>
          
   
        <View style={{backgroundColor:bgColor,width:width,height:54,marginTop:mt,alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:br }}>
            <Text style={{color:'white',alignItems:'center',justifyContent:'center',fontSize:18,fontWeight:'600'}}>{title}</Text>
        </View>
    </TouchableOpacity></View>
    )
}

export default Custombutton;