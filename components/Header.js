import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {colors, parameters} from '../global/styles';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
const Header = ({title, type}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
       <View style={{marginLeft: 20}}>
            <Icon
              type='material-comunity'
              name={type}
              color={colors.headerText}
              size={28}
              onPress ={()=>{navigation.goBack()}}
            />
       </View>
       <View>
         <Text style={styles.headerText}>{title}</Text>
       </View>
    </View>
  )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.buttons,
        flexDirection: "row",
        height: parameters.headerHeight,
        alignItems: "center"
    },
    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold"
    }
})

export default Header