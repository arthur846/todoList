import { View, Text, Image, TextInput } from "react-native"
import StyleLogin from "../styles/Style.Login"
import ButtonLogin from "../components/textButton/ButtonLogin"
import StyleButLogin from "../styles/Style.txtBut.Login"
import TextButton from "../components/textButton/TextButton"

interface Props {
    navigation: any; 
  }

const Login = ({navigation} : Props)=>{

    const navigateText = ()=>{
        navigation.navigate('Registration')
    }

    const navigate = ()=>{
        navigation.navigate('DashBoard')
      }

    return (
        <View style={StyleLogin.container}>
            <Image
            source={require('./images/shape.png')}
            style={StyleLogin.imgShape}
            />
             <Text style={StyleLogin.title}>Hello, world!</Text>
            <Image
            source={require('./images/undraw_access.png')}
            style={StyleLogin.imgUndraw}
            />
           <View style={StyleLogin.inputContaner}>
                <Text style={StyleLogin.textLabel}>Email</Text>
                <TextInput style={StyleLogin.textInput} placeholder='mary.elliot@mail.com'/>
                <Text style={StyleLogin.textLabel}>Password</Text>
                <TextInput style={StyleLogin.textInput} secureTextEntry={true} placeholder='************'/>
                <TextButton label='Forgot Password?' style={StyleLogin.txtClick} onClick={()=>(console.log('clicou no forgot!'))}/>
           </View>
           <ButtonLogin style={StyleButLogin.but} onClick={()=>(navigate())}/>
           <View style={StyleLogin.txtContainer}>
                <Text>Already have an account ? </Text>
                <TextButton label='Sign Up' style={StyleLogin.textClickC} onClick={()=>(navigateText())}/>
            </View>
        </View>
    )
}

export default Login