import { StyleSheet } from "react-native";

const StyleRegistration = StyleSheet.create ({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
    },
    imgShape: {
        width: 265, 
        height: 192,
        left: -62,
        top: 2,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 30,  
        textAlign: 'center',     
    },
    text: {
        fontSize: 18,
        margin: 10,
        textAlign: 'center',        
    },
    subContainer:{

        width: 360,
        height: 380,
    },
    txtContainer:{
        marginTop: 10,
        flexDirection: 'row',
    },
    txtClick:{
        color: '#62D2C3',
    },
    textLabel:{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,  
        textAlign: 'left',
        paddingLeft: 5, 
    },
    textInput:{
        backgroundColor: 'white',
        height: 40,
        fontSize: 16,
        marginTop: 5,  
        textAlign: 'left',
        paddingLeft: 5, 
        borderRadius: 15,
    },
})
export default StyleRegistration