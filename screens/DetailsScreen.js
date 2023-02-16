import {Text,View,StyleSheet,Image,ScrollView} from 'react-native';
import {useEffect,useContext} from 'react';
import { AppContext } from '../context/AppContext';
import * as Progress from 'react-native-progress';
// import {useRoute} from '@react-navigation/native';





const DetailScreen=()=>{

//  const route=useRoute();

//  console.log(route.params.welcome)

//   const app=useContext(AppContext)
// useEffect(()=>{
//   app.setbtmtab({bottom:-200})
// });


    

    return(
    
    
    
    
<View style={styles.container}>
<View style={styles.header}>
<Text>{`<`}</Text>
<View style={styles.bookmark}>
 <Image source={require("../icons/like.png")} style={styles.like}/>
</View>

</View>
<Image source={{uri:"https://magazine.columbia.edu/sites/default/files/styles/full_width_card/public/2018-09/Wild-fires.jpg?itok=8pfGkL7z"}} style={styles.photo}/>
<ScrollView style={styles.bottomSheet}>
<Text style={styles.catagory}>Technology</Text>
<Text style={styles.campheading}>Flu Detector - Future of medicine</Text>
<View style={styles.amount}>
    <Text style={styles.collectedAmount}>11Eth</Text>
    <Text style={styles.TargetAmount}>20Eth</Text>
  </View>
<View style={styles.progressbar}>

 
<Progress.Bar progress={0.5} borderWidth={0} color={'#1F2A36'}  width={330}animated={true}/>

  </View>
</ScrollView>
</View>
      
      )
};
export default DetailScreen;

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    marginTop:40,
    paddingHorizontal:40,
height:30,
width:"100%",
flexDirection:"row",
justifyContent:"space-between",
position:"absolute",
zIndex:10
  },
  photo:{
 width:"100%",
 height:300
  },
  like:{
    width:30,
    height:30
  },
  bottomSheet:{
    height:500,
    width:"100%",
    backgroundColor:"white",
    borderRadius:20,
    marginTop:-50
  },
  catagory:{
    color:"#1F2A36",
    fontSize:17,
    fontWeight:"700",
    marginLeft:20,
    marginTop:20
  },
  campheading:{
    fontWeight:"600",
    fontSize:25,
    margin:20
  },
  progressbar:{
    marginTop:14,
    backgroundColor:"rgba(64, 169, 121,0.3)",
    borderRadius:10,
    width:"79%",
    overflow:"hidden",
    marginLeft:35

  },
  amount:{
    marginTop:18,
    flexDirection:"row",
    width:"79%",
     marginLeft:35,
     justifyContent:"space-between"
  }
})