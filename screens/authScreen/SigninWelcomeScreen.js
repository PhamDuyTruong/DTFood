import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { Icon, Button, SocialIcon } from '@rneui/themed';
import {colors} from '../../global/styles'
import { useNavigation } from '@react-navigation/native';
const SigninWelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <ScrollView>
          <View style ={{justifyContent:'flex-start',alignItems:'center',paddingTop:20}}>    
            <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
            <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>IN YOUR AREA</Text>     
         </View> 

        <View>
            <Swiper autoplay ={true} style ={{height:250, marginTop: 15}}>
                <View style={styles.slide1}>
                    <Image 
                        source={require("../../assets/plate3.png")}
                        style={{height:"100%", width:"100%"}}
                    />
                </View>
                <View style={styles.slide2}>
                    <Image 
                        source ={{uri: "https://cdn.vox-cdn.com/thumbor/KJjKfCBX0DEu7QY7395Sc8fdYBY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23957266/Le_Fantome.jpg"}}
                        style ={{height:"100%", width:"100%"}}
                    />
                </View>
                <View style ={styles.slide3}>
                <Image 
                        source ={{uri:"https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200"}}
                        style ={{height:"100%", width:"100%"}}
                />
              </View>
              <View style ={styles.slide3}>
                <Image 
                        source ={{uri:"https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"}}
                        style ={{height:"100%", width:"100%"}}
                />
              </View>
            </Swiper>
        </View>

        <View style ={{marginBottom:20}}>
            <View style ={{marginHorizontal:20, marginTop:30}}>
                <Button 
                     title ="SIGN IN"
                     buttonStyle = {styles.buttonStyle}
                     titleStyle = {styles.buttonTitleStyle}
                     onPress={() => navigation.navigate("SignInScreen")}
                />
            </View>
            <View style ={{marginHorizontal:20, marginTop:30}}>
                <Button 
                    title="Create an account"
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.buttonTitleStyle}
                    onPress={() => {}}
                />
            </View>
        </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
    slide1: {
        height:250,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#9DD6EB'
        },
        slide2: {
          height:250,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#97CAE5'
        },
        slide3: {
          height:250,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#92BBD9'
        },

        buttonStyle: {
            backgroundColor: '#ff8c52',
            alignContent: 'center',
            justifyContent: 'center',
            borderRadius: 12,
            borderwidth: 1,
            borderColor: '#FfBc52',
            height: 50,
            paddingHorizontal: 20,
            width: '100%',
          },
          buttonTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -3,
          },
  
        createButton:{
          backgroundColor:"white",
          alignContent:"center",
          justifyContent:"center",
          borderRadius:12,
          borderWidth:1, 
          borderColor:"#ff8c52",
          height:50,
          paddingHorizontal:20,
          borderColor:colors.buttons,
        },
  
        createButtonTitle:{
          color:colors.grey1,
          fontSize:20,  
          fontWeight:"bold" ,
          alignItems:"center",
          justifyContent:"center"  ,
          marginTop:-3
        }
})

export default SigninWelcomeScreen