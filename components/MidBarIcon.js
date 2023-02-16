import{Text,View,Image,StyleSheet} from "react-native";

const MidBarIcon=(props)=>{

    return(<View style={styles.singleIcon}>
        <View style={styles.midIcons}>
        <Image source={props.icon} style={styles.midIcon}/>
        </View>
        <Text style={styles.midIconLabel}>{props.label}</Text>
        </View>)
}

export default MidBarIcon;

const styles=StyleSheet.create({
    singleIcon:{
        justifyContent:"center",
        alignItems:"center",
        width:70,
        
          },
          midIcon:{
         
            width:"100%",
            height:"100%",
            
          },
          midIcons:{
            width:50,
            height:50,
            padding:10,
            borderRadius:55,
               backgroundColor:"rgba(64, 169, 121,0.1)",
               marginBottom:8
          },
          midIconLabel:{
            fontSize:10,
            fontWeight:"600"
          }
})