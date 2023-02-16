
import { SafeAreaView, StyleSheet, TextInput,Text ,View, TouchableOpacity,Image,ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import CampCard from '../../components/CampCard';

function UrgentFunding(){



    return(
    <View style={[styles.urgentfundsec]}>
<View style={[styles.uhead,styles.midbarsec]}>
<Text style={styles.urgentHeading} >
  Urgent Fundrasing
</Text>
<Text>{`->`}</Text>
</View>

<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} overScrollMode="never" >
<CampCard/>
<CampCard/>
</ScrollView>
</View>
)
}
export default UrgentFunding

const styles=StyleSheet.create({
    midbarsec:{
        marginTop:10,
       flexDirection:"row" ,
       justifyContent:"space-between",
       paddingHorizontal:27,
       
    
      },
      urgentfundsec:{
        marginTop:14,
        // marginHorizontal:5
      },
})