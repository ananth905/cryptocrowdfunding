import { Text ,View} from "../components/Themed";
import { useState } from "react";
import { Image,Pressable,StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import screenone from "../screens/TabOneScreen"
import AccountMenu from "../screens/subscreen/AcoountMenu";
import DetailScreen from "../screens/DetailsScreen";
import MyDonation from "../screens/MyDonation";

import BottomTab from "../components/BottomTab";
const Tab=createBottomTabNavigator();
const Stack=createStackNavigator();


function Index(){
  
 



const [close,setClose]=useState({

})

  
  
  
  
  return(

<NavigationContainer>
<AccountMenu onClick={setClose} style={styles.accountmenu} ></AccountMenu>




<View style={[styles.screen,close]}>

<BottomTab onClick={setClose}/>





<Stack.Navigator screenOptions={{
  headerShown:false,
  
  }}>
  
  <Stack.Screen name="home" component={screenone} />
  <Stack.Screen name="detailsscreen" component={DetailScreen}/>
  <Stack.Screen name="MyDonation" component={MyDonation}/>
</Stack.Navigator>
</View>

</NavigationContainer>
);









  
}
export default Index
const styles=StyleSheet.create({
  tabIcon:{
    width:32,
    height:32,
    
  },
  label:{
    fontSize:11
  },
  shadowProp: {  
    shadowOffset: {width: -2, height: -44},  
    shadowColor: '#171717',  
    shadowOpacity: 0.8,  
    shadowRadius: 3,  
    
  },
  screen:{
    position:'absolute',
    zIndex:11,
    width:'100%',
    top:'4%',
    height:'90%',
    left:'-68%',
    borderRadius:20,
    overflow:'hidden'
  },
 
})
