import {View,Text,Image,Pressable,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
function BottomTab(props){
  const app=useContext(AppContext)

    const navigation=useNavigation()

  
    


    return (<View style={[styles.btmtab]}>

        <Pressable style={{alignItems:"center"}} onPress={()=>{navigation.navigate('home')}}>
                    <View >
                      <Image style={styles.tabIcon} source={require("../icons/home.png")}/>
                    </View>
                    <Text style={styles.label}>Home</Text>
                  </Pressable>
        
        <Pressable style={{alignItems:"center"}}>
                    <View >
                      <Image style={styles.tabIcon} source={require("../icons/donation.png")}/>
                    </View>
                    <Text style={styles.label}>Favorite</Text>
                  </Pressable>
        
        
        <Pressable style={{alignItems:"center"}} onPress={()=>{ navigation.navigate("MyDonation") }}>
                    <View >
                      <Image style={styles.tabIcon} source={require("../icons/mydonation.png")}/>
                    </View>
                    <Text style={[{textAlign:"center"},styles.label]}>My Donation</Text>
                  </Pressable>
        
        
        <Pressable style={{alignItems:"center"}} onPress={()=>{props.onClick({})}}>
                    <View >
                      <Image style={styles.tabIcon} source={require("../icons/myaccount.png")}/>
                    </View>
                    <Text style={styles.label}>Account</Text>
                  </Pressable>
        
        
        
        </View>
        )
}
export default BottomTab

const styles=StyleSheet.create({

    tabIcon:{
        width:32,
        height:32,
        
      },
      label:{
        fontSize:11
      },
      btmtab:{
        position:'absolute',
        alignItems:'center',
        flexDirection:"row",
        
        height:70,
        // elevation:5,
        bottom:0,
        zIndex:15,
        width:'100%',
        // left:'5%',
        justifyContent:'space-around',
        // borderRadius:70,
        paddingHorizontal:10,
      backgroundColor:"white"
       
      },
    
    



});