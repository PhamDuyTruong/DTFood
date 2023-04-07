import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState, useRef} from 'react'
import { Icon, Button, SocialIcon } from '@rneui/themed';
import Header from '../../components/Header';
import { colors, titleText } from '../../global/styles';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
const SigninScreen = () => {
    const [textInputFocus, setTextInputFocus] = useState(false);
    const textInput1 = useRef(1);
    const textInput2 = useRef(2);
    const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Header title="My Account" type="arrow-left"/>
      <View style={{alignItems: "center", marginTop: 10}}>
         <Text style={titleText}>Sign in</Text>
      </View>
      <View style={{alignItems: "center", marginTop: 10}}>
           <Text style={styles.text1}>Please enter the mail and password</Text>
           <Text style={styles.text1}>Registered with your account</Text>
      </View>
      <View style={{marginTop: 20, }}>
         <View>
             <TextInput 
                style={styles.textInput1}
                placeholder='Email'
                ref={textInput1}
             />
         </View>
         <View style={styles.textInput2}> 
            <Animatable.View animation={textInputFocus ? "" :  "fadeInLeft" } duration={500}>
                <Icon 
                    name='lock'
                    iconStyle={{color: colors.grey3}}
                    type='material'
                />
            </Animatable.View>
            <TextInput 
                style={{width: "80%"}}
                placeholder='Password'
                ref={textInput2}
                onFocus={() => setTextInputFocus(false)}
                onBlur={() => setTextInputFocus(true)}
             />
            <Animatable.View  animation={textInputFocus ? "" :  "fadeInLeft" } duration={500}>
                <Icon 
                    name='visibility-off'
                    iconStyle={{color: colors.grey3}}
                    type='material'
                    style={{marginRight: 10}}
                />
            </Animatable.View>
         </View>
       
      </View>

      <View style={{marginHorizontal: 20, marginVertical: 20}}>
         <Button 
            title="SIGN IN"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitleStyle}
            onPress={() => navigate.navigate("AppScreen")}
         />

      </View>

      <View style={{alignItems: "center"}}>
          <Text style={{...styles.text1, textDecorationLine: "underline"}}>Forgot Password ?</Text>
      </View>

      <View style={{alignItems: "center", marginTop: 10, marginBottom: 15}}>
            <Text style={{fontSize: 20, fontWeight: "800"}}>OR</Text>
      </View>

      <View style ={{alignItems:"flex-end",marginHorizontal:20}}>
            <Button 
                title="Create an account"
                buttonStyle={styles.createButton}
                titleStyle={styles.createButtonTitle}
                onPress={() => {}}
            />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1:{
        color: colors.grey3,
        fontSize: 16
    },
    textInput1:{
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft:16,
        height: 45
    },
    textInput2:{
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center",
        alignItems: "center",
        paddingLeft:16,
        height: 45
    },
    buttonStyle: {
        backgroundColor: '#ff8c52',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
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
      socialIcon: {
        borderRadius:12,
        height:50
      },
      createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:"#ff8c52",
        height:40,
        paddingHorizontal:20,
      },

      createButtonTitle:{
        color:"#ff8c52",
        fontSize:16,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
      }

})

export default SigninScreen