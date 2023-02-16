import React, { useEffect } from 'react';
import { SafeAreaView,ScrollView, StyleSheet, TextInput, TouchableOpacity,Image ,Text,View,Pressable} from 'react-native';
import * as Progress from 'react-native-progress';

import { AppContext } from '../../context/AppContext';

import WalletConnectProvider from "@walletconnect/web3-provider";
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import Web3 from 'web3';
import {useContext} from 'react'
function AccountMenu(props){

    const connector = useWalletConnect();
    const app=useContext(AppContext)
    const provider = new WalletConnectProvider(
    {  rpc: {
        5: 'https://goerli.infura.io/v3/f2f765c92b5848c594ff1471d203c2c1',
    },
    chainId: 5,
    connector: connector,
    qrcode: false,
  }
    );
    const connectWallet = React.useCallback(async() => {
        return connector.connect();
    }, [connector]);
  
    const killSession = React.useCallback(() => {
      return connector.killSession();
    }, [connector]);


const connect=async()=>{
  
  console.log("Connecting ")
 
    try{
      await provider.enable()
      let web=await new Web3(provider);

       // setweb3(web);
        const accounts=await web.eth.getAccounts();
        const bal=await web.eth.getBalance(accounts[0])
        console.log("acc",bal);
        app.setprovider(provider);
      
}
  catch (err){
     console.log("error",err)
  }
   };

useEffect(()=>{
  connect()
},[connector])

    return(
    
  



        <View style={styles.container}>
            <View style={styles.list}>

          
            
          <View style={styles.optionView}>

              <Image style={styles.avatar} source={require("../../icons/avatar.png")}/>
              
           {!connector.connected&& ( <Pressable style={styles.button} onPress={async()=>{connectWallet();connect()}}><Text style={styles.btntext}>Connect Wallet</Text></Pressable>
           )}
              {
        !!connector.connected&&(
          <View style={styles.address}>
            <Text style={styles.btntext}>{connector.accounts[0].slice(0,5)}....{connector.accounts[0].slice(connector.accounts[0].length-5,connector.accounts[0].length)}</Text>
            </View>
        )
}


           
             </View>
      
    





             <View style={styles.alloptions}>
              
             <View style={styles.optionView}><Image style={styles.logo} source={require("../../icons/dashboard.png")}></Image>
                <Text style={styles.option}>Dashboard</Text></View>
                <View style={styles.optionView}><Image style={styles.logo} source={require("../../icons/logout.png")}></Image>
                <Text style={styles.option}>Account</Text></View>
                <View style={styles.optionView}><Image style={styles.logo} source={require("../../icons/setting.png")}></Image>
                <Text style={styles.option}>Settings</Text></View>
                 <View style={styles.optionView}><Image style={styles.logo} source={require("../../icons/aboutus.png")}></Image>
                <Text style={styles.option}>About Us</Text></View>



              <View style={styles.lastOption}>
              <View style={styles.optionView}><Image style={styles.logo} source={require("../../icons/aboutus.png")}></Image>
                <Text style={styles.option}>Share App</Text></View>
                <Pressable style={styles.optionView} onPress={killSession}><Image style={styles.logo} source={require("../../icons/aboutus.png")}></Image>
                <Text style={styles.option}>Log Out</Text></Pressable>
              </View>

             </View>



            </View>
<Pressable style={styles.close} onPress={()=>{props.onClick({
    left:0,
  height:"100%",
  borderRadius:0,
  top:0})}}>
<Image source={require("../../icons/close1.png")} style={styles.btn}/>
</Pressable>

            <View>

            </View>
        </View>
    
   
    )
}

export default AccountMenu

const styles=StyleSheet.create({

    container:{
        flex:1,
backgroundColor:'#1F2A36',
width:"100%",
height:"100%",
position:'absolute',
zIndex:10

    },
    list:{
position:"absolute",
height:"80%",
top:"10%",
minWidth:"29%",

left:"50%",
alignItems:"flex-start",
    },
    option:{
        color:'white',
        marginVertical:14,
        fontSize:16
    },
    optionView:{
        flexDirection:"row",
        alignItems:"center"
    },
    logo:{
        width:22,
        height:22,
        marginRight:10
    },
    avatar:{
      width:40,
      height:40
    },
    button:{
      paddingVertical:10,
      paddingHorizontal:19,
      backgroundColor:'rgb(64, 169, 121)',
      marginLeft:30,
      borderRadius:20
    },
    btntext:{
      // backgroundColor:'#1F2A36'
      color:"white"
    },
    alloptions:{
      marginTop:6,
      marginLeft:5,
      
      height:"80%",
      position:'relative'
    },
    address:{
   marginLeft:10,
   fontSize:10
    },
    btn:{
      width:52,
      height:52,
    },
    close:{
      position:"absolute",
      right:20,
     
      bottom:'10%'

    },
    lastOption:{
      position:"absolute",
      bottom:0
    }
})

//primary green dark : #1F2A36
//light green #40A979  rgb(64, 169, 121)