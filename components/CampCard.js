import { SafeAreaView, StyleSheet, TextInput,Text ,View, TouchableOpacity,Image,Pressable } from 'react-native';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import {useEffect,useContext} from 'react'
import { AppContext } from '../context/AppContext';
function CampCard(){
  const navigation=useNavigation();
//   const app=useContext(AppContext)
// useEffect(()=>{
//   app.setbtmtab({bottom:-200})
// })


    return (
        <Pressable style={styles.ucampcard} onPress={()=>{navigation.navigate("detailsscreen",{welcome:"heloo"})}}>
  <View style={styles.imgsec}>
<Image style={styles.ucampimg} source={require("../icons/R.jpg")}/>
<Text style={styles.catg} >Disaster</Text>
  </View>
<View style={{marginTop:10,justifyContent:"center",alignItems:"center"}}>
<Text style={styles.ucampreason}>
  Urgent Help Needed to help families affected by  fire in africa
</Text>
<View style={styles.progressbar}>
<Progress.Bar progress={0.7} borderWidth={0} color={'#1F2A36'}  width={180}animated={true}/>

  </View>
  <View style={{flexDirection:"row",justifyContent:"space-between",width:"75%",marginTop:10}}>
    <Text>£ 7000 </Text>
    <Text>£ 10000 </Text>
  </View>
</View>
</Pressable>
    )

}
export default CampCard;


const styles=StyleSheet.create({
    ucampcard:{
        height:250,
        width:240,
    margin:24,
        borderRadius:10,
        overflow:"hidden",
        position:"relative",
        backgroundColor:"rgba(64, 169, 121,0.09)",
        
         
      },
      imgsec:{
        width:"100%",
        height:"50%",
       
    
      },
      ucampimg:{
        width:"100%",
        height:"100%",
        resizeMode:"cover"
      },
      catg:{
        position:"absolute",
        color:"white",
        backgroundColor: "#1F2A36",
        borderRadius:11,
        paddingHorizontal:11,
        paddingVertical:4,
        bottom:"10%",
        left:"10%",
        fontSize:10
      }
      ,ucampreason:{
    fontSize:11.4,
    fontWeight:"600",
  marginHorizontal:5  
    
      },
      progressbar:{
        marginTop:14,
        backgroundColor:"rgba(64, 169, 121,0.3)",
        borderRadius:10
      }

})