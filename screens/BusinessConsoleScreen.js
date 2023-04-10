import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BusinessConsoleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Business Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    }
})


export default BusinessConsoleScreen