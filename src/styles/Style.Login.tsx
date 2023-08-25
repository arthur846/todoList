import { StyleSheet } from "react-native";

const StyleLogin = StyleSheet.create({
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
    imgUndraw: {
        width: 188, 
        height: 170,
        top: 34,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 40,
    },
    text: {
        fontSize: 18,
        margin: 20,
        textAlign: 'center',        
    },
    inputContaner:{
        marginTop: 60,
    },
    textLabel:{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,  
        textAlign: 'left',
        paddingLeft: 10, 
    },
    textInput:{
        backgroundColor: 'white',
        height: 40,
        width: 365,
        fontSize: 16,
        marginTop: 5,  
        textAlign: 'left',
        paddingLeft: 10, 
        borderRadius: 15,
    },
    txtClick:{
        color: '#62D2C3',
        marginTop: 10,
        fontSize: 16,
        marginLeft: 200,
    },
    txtContainer:{
        marginTop: 10,
        flexDirection: 'row',
    },
    textClickC:{
        color: '#62D2C3',
        fontSize: 16,
        marginLeft: 5,
    },
})

export default StyleLogin