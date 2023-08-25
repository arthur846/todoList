import React from 'react'
import { View , Image , Text } from 'react-native'
import StyleSplashScreen from '../styles/Style.SpashScreen';
import StyleButSplash from '../styles/Style.txtBut.splash';
import ButtonStarted from '../components/textButton/ButtonStarted';

const SplashScreen = ()=>{
    return(
        <View style={StyleSplashScreen.container}>
            <Image
            source={require('./images/shape.png')}
            style={StyleSplashScreen.imgShape}
            />
            <Image
            source={require('./images/undrawmobile.png')}
            style={StyleSplashScreen.imgUndraw}
            />
            <Text style={StyleSplashScreen.title}>Get things done with TODO</Text>
            <Text style={StyleSplashScreen.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere gravida purus id eu condimentum est diam quam. Condimentum blandit diam.</Text>
            <ButtonStarted style={StyleButSplash.but} onClick={()=>(console.log('clicou'))}/>
        </View>
    )
}
export default SplashScreen;