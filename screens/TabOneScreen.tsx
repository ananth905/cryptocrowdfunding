import React from 'react';
import { SafeAreaView,ScrollView, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import * as Progress from 'react-native-progress';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import Web3 from 'web3';
import MidBarIcon from '../components/MidBarIcon';
import UrgentFunding from './subscreen/UrgentFundinf';
import ProtectForest from './subscreen/ProtectForest';
import Software from './subscreen/Sowftware';
import AnimalWelfare from './subscreen/AnimalWelfare';
import { AppContext } from '../context/AppContext';
import {useContext,useState} from 'react'
import { useEffect } from 'react';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


  const connector = useWalletConnect();
  const {provider}=useContext(AppContext);

  const [balance,setBalance]=useState(" ");
  

  if(connector.connected){
    console.log("connected")
  const getdetails=async()=>{
    
  try{ 
    const web3=new Web3(provider)
    let accounts=await web3.eth.getAccounts();
    let bal= await web3.eth.getBalance(accounts[0]);
    setBalance(web3.utils.fromWei(bal,'ether').slice(0,8));

    console.log("balanceee",accounts)
  }
    catch(err){
      console.log("Errorr",err)
    }
  };
  getdetails();
  }
else{
console.log("not connected")
}

  return (
    <SafeAreaView style={styles.container} >
    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false} onScroll={(e)=>{}}>
   
 
<View style={styles.searchArea}>
<View style={styles.search}>
  <Image style={styles.inputicon}  source={require("../icons/search.png")}/>
  <TextInput style={styles.searchInput} placeholder="Search Campign"></TextInput>
  </View>
  <View >
    <Image style={styles.icon} source={require("../icons/bell.png")}/>
  </View>

</View>
<View style={styles.walletsec}>
<View style={styles.wallet}>
<View style={styles.walleticon}>
<Image source={require("../icons/eth1.png")} style={styles.money} />
</View>
<View style={styles.balancesec}>
  <Text style={styles.qoute}>
   Your Donation Packet
  </Text>
  <Text style={styles.balance}>{balance}</Text>
</View>


</View>
</View>

<View style={styles.midbarsec}>
<MidBarIcon label="Donate" icon={require("../icons/dollar.png")}/>
<MidBarIcon label="Tree Donation" icon={require("../icons/tree.png")}/>
<MidBarIcon label="Medical Help" icon={require("../icons/health.png")}/>
<MidBarIcon label="Help Ukraine" icon={require("../icons/ukraine.png")}/>
</View>
<UrgentFunding />
<ProtectForest/>  
<Software/>
<AnimalWelfare/>

 

   
    </ScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:35,
    flex: 1,
    backgroundColor:"white",
    
    // paddingHorizontal:27
  
  },

  searchArea:{
     paddingHorizontal:27,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
  },
  search:{
backgroundColor:"rgba(255,255,255,0.5)",
width:260,
height:35,
position:"relative"


  },
  searchInput:{
    backgroundColor:"rgba(230,230,230,0.1)",
    paddingHorizontal:20,
paddingVertical:6,
paddingLeft:39,
borderRadius:40
  },
  icon:{
    width:32,
    height:32,
    
  },
  inputicon:{
    position:"absolute",
    zIndex:10,
    width:20,
    height:20,
    top:"25%",
    left:"5%"
  },
  walletsec:{
    marginHorizontal:27,
    marginVertical:20,
    marginTop:30,
    width:"84%",
    height:100,
    borderWidth:0.5,
    borderColor:"rgba(5,5,5,0.2)",
    borderRadius:20,
    overflow:"hidden",

  },
  wallet:{
    width:"75%",
    height:"100%",
    backgroundColor:"#1F2A36",
    borderRadius:20,

    paddingHorizontal:20,
    flexDirection:"row",
    alignItems:"center"
  },
  walleticon:{
    height:49,
    width:49,
    borderRadius:49,
    // backgroundColor:"#40A979",
    alignItems:"center",
    justifyContent:"center"
  },
  money:{
    width:"70%",
    height:"70%"
  },
  balancesec:{
    backgroundColor:"#1F2A36",
    marginLeft:10,
    width:"70%"
  },
  qoute:{
    color:"rgba(255,255,255,0.5)",
    fontSize:12
  },
  balance:{
    fontSize:24,
    color:"white",
    fontWeight:"900"
  },
  midbarsec:{
    paddingHorizontal:20,
    marginVertical:10,
   flexDirection:"row" ,
   justifyContent:"space-between",

  },
 

 
});
//primary green dark : #1F2A36
//light green #40A979  rgb(64, 169, 121)