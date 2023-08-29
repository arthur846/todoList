import React from 'react'
import { View, Text, Image, TextInput, } from "react-native"
import StyleRegistration from '../styles/Style.Registration'
import ButtonRegister from '../components/textButton/ButtonRegister'
import StyleButRegister from '../styles/Style.txtBut.Register'
import TextButton from '../components/textButton/TextButton'

interface Props {
    navigation: any; 
  }

const Registration = ({navigation} : Props)=>{

    const navigate = ()=>{
        navigation.navigate('Login')
      }

    return (
        <View style={StyleRegistration.container}>
            <Image
            source={require('./images/shape.png')}
            style={StyleRegistration.imgShape}
            />
            <Text style={StyleRegistration.title}>Welcome Onboard!</Text>
            <Text style={StyleRegistration.text}>Lets help you in completing your tasks</Text>
            <View style={StyleRegistration.subContainer}>
                <Text style={StyleRegistration.textLabel}>Full name</Text>
                <TextInput style={StyleRegistration.textInput} placeholder='Mary Elliot'/>
                <Text style={StyleRegistration.textLabel}>Email</Text>
                <TextInput style={StyleRegistration.textInput} placeholder='mary.elliot@mail.com'/>
                <Text style={StyleRegistration.textLabel}>Password</Text>
                <TextInput style={StyleRegistration.textInput} secureTextEntry={true} placeholder='************'/>
                <Text style={StyleRegistration.textLabel}>Confirm Password</Text>
                <TextInput style={StyleRegistration.textInput} secureTextEntry={true} placeholder='************'/>
            </View>
            <ButtonRegister style={StyleButRegister.but} onClick={()=>(console.log('clicou em registrar-se'))}/>
            <View style={StyleRegistration.txtContainer}>
                <Text>Already have an account ? </Text>
                <TextButton label='Sign In' style={StyleRegistration.txtClick} onClick={()=>(navigate())}/>
            </View>
        </View>
    )
}

export default Registration