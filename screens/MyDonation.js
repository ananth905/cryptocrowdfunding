import {ScrollView, StyleSheet, Text,View , Image} from 'react-native'
import * as Progress from 'react-native-progress';
import MyDonationCard from '../components/MyDonationCard';
function MyDonation(){


 return ( 
        <ScrollView style={styles.container} >
<View style={styles.heading}>
    
    <Text style={styles.headingText}>MyDonation</Text>
    
    
    </View>
<View style={styles.allcards}>

<MyDonationCard/>

<MyDonationCard/>

<MyDonationCard/>

</View>


        </ScrollView>
        
    )
}
export default MyDonation;

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:50,
        backgroundColor:"white",
       
    },
    allcards:{
    width:'100%',
    alignItems:"center",
    overflow:'hidden'
    },
    card:{
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
        margin:12,
        marginLeft:20,
        marginBottom:18
    },
    headingText:{
        fontWeight:"500",
       fontSize:18     
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