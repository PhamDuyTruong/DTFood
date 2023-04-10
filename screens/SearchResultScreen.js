import { View, Text, StyleSheet, Dimensions,FlatList  } from 'react-native'
import React from 'react';
import {restaurantsData} from '../global/Data';
import {colors} from '../global/styles'
import SearchResultCard from '../components/SearchResultCard';

const SearchResultScreen = ({navigation,route}) => {
  return (
    <View style={styles.container}>
        <FlatList 
             style ={{backgroundColor:colors.cardbackground}}
             data = {restaurantsData}
             keyExtractor ={(item,index)=>index.toString()}
             renderItem={({item, index}) => (
                <SearchResultCard 

                
                />
             )}
             ListHeaderComponent ={
                <View>
                    <Text style ={styles.listHeader}>{restaurantsData.length} Result for {route.params.item}</Text>
                </View>
             }   

             showsVerticalScrollIndicator ={false}
        />
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
      paddingTop:20
    },

    listHeader:{color :colors.grey1,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
}
})

export default SearchResultScreen