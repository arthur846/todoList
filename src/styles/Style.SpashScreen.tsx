import { StyleSheet } from "react-native"

const StyleSplashScreen = StyleSheet.create ({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EEEEEE',
    },
    imgShape: {
        width: 265, 
        height: 192,
        left: 2,
        top: 2,
    },
    imgUndraw: {
        width: 188, 
        height: 170,
        left: 93,
        top: 34,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 100,
        left: 65
    },
    text: {
        fontSize: 18,
        margin: 20,
        textAlign: 'center',        
    },
})
export default StyleSplashScreen;