

import { SafeAreaView, StyleSheet, TextInput,Text ,View, TouchableOpacity,Image,ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import CampCard from '../../components/CampCard';

function UrgentFunding(){



    return(
    <View style={[styles.urgentfundsec]}>
<View style={[styles.uhead,styles.midbarsec]}>
<Text style={styles.urgentHeading} >
Software
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
       paddingHorizontal:27,
       justifyContent:"space-between",

    
      },
      urgentfundsec:{
        marginTop:4,
        // marginHorizontal:5
      },
      
})