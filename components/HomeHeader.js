import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import {Icon, withBadge} from 'react-native-elements'
import {colors, parameters} from '../global/styles'
import { useNavigation } from '@react-navigation/native';
const HomeHeader = () => {

  const BadgeIcon = withBadge(0)(Icon);
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
        <View style={{alignItems: "center", justifyContent: "center", marginLeft: 15}}>
           <Icon 
               type = "material-community"
               name = "menu"
               color = {colors.cardbackground}
               size = {32}
               onPress={() => {
                  navigation.toggleDrawer()
               }}
           />
        </View>
        <View style={{alignItems: "center", justifyContent: "center"}}>
            <Text style ={{color:colors.cardbackground, fontSize:25,fontWeight:'bold'}}>DTFood</Text>
        </View>

        <View style ={{alignItems:"center", justifyContent:"center", marginRight:15}}>
            <BadgeIcon 
                type ="material-community"
                name ="cart"
                size = {35}
                color ={colors.cardbackground}
            />
        </View>

    </View>
  )
};

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    backgroundColor:colors.buttons,
    height:parameters.headerHeight,
    justifyContent:'space-between',
    alignItems: "center"
  },
 

})

export default HomeHeader