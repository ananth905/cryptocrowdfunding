import {ScrollView, StyleSheet, Text,View , Image, Pressable} from 'react-native'
import * as Progress from 'react-native-progress';
function MyDonationCard(){
return(<Pressable style={styles.card}>
    <Image style={styles.cardimg} source={require("../icons/R.jpg")}/>
    <View style={styles.description}>
     <Text style={styles.heading}>Factory Fire</Text>
     <Text style={styles.subject}>Lare fire brokeup in DRC in oil industry.... </Text>
     <View style={styles.progressbar}>
<Progress.Bar progress={0.7} borderWidth={0} color={'#1F2A36'}  width={180}animated={true}/>

  </View>
    </View>
</Pressable>)

}

export default MyDonationCard;


const styles=StyleSheet.create({
   
    card:{
        marginBottom:20,
width:'90%',
height:105,
backgroundColor:'red',
flexDirection:'row',
alignItems:'center',
paddingHorizontal:10,
borderRadius:10,
backgroundColor:' rgba(64, 169, 121,0.1)'
    },
    cardimg:{
 width:90,
 height:90,
 borderRadius:8
    },
    description:{
        marginLeft:10,
     
        width:'65%'
    },
    heading:{
        fontWeight:"500"
    },
    subject:{
        marginTop:8
    }               ,
    progressbar:{
        marginTop:4,
        backgroundColor:"rgba(64, 169, 121,0.3)",
        borderRadius:10
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
})