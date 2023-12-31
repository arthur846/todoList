import { StyleSheet } from "react-native";

const StyleDashBoard = StyleSheet.create ({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#62D2C3',
        alignItems: 'center',
    },
    subContainer: {
        backgroundColor: '#EEEEEE',
        marginTop: 15,
        height: 534,
        width: 392,
        alignItems: 'center',
    },
    imgShape: {
        width: 170, 
        height: 160,
        left: -115,
        top: 2,
    },
    imgElipse:{
        top: -100,
        width: 100,
        height: 100,
        borderRadius: 60,
    },
    imgGroup:{
        marginTop: 10,
        width: 127,
        height: 127,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginTop: -90,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black', 
        marginLeft: -240,     
    },
    containeList: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#e8e8e6',
        backgroundColor: '#FFFFFF',
        marginTop: 12,
        height: 315,
        width: 360,
    },
    titleList: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        left: 5,
    },
    headerC: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    },
    inputTxt: {
        borderWidth: 2,
        borderColor: '#e8e8e6',
        borderRadius: 4,
        width: 200,
        height: 30,
        padding: 2,
        fontSize: 18,
        maxWidth: 200,
        marginLeft: 10,
        paddingLeft: 5,
    },
    txtList:{
        borderWidth: 1,
        borderColor: '#696969',
        borderRadius: 4,
        marginLeft: 10,
        width: 300,
        fontSize: 20,
        marginVertical: 2,
        marginHorizontal: 4,
        paddingLeft: 5,
        textAlign: 'center',
    },
    box: {
        marginLeft: 8,
        borderWidth: 2,
        borderRadius: 15,
        width: 28,
        height: 28,
        borderColor: 'black',
        backgroundColor: 'white',
    },
    boxT: {
        marginLeft: 8,
        borderWidth: 1,
        borderRadius: 15,
        width: 28,
        height: 28,
        borderColor: 'black',
        backgroundColor: '#696969',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tBox: {
        borderWidth: 2,
        borderColor: 'white',
        height: 15,
        width: 15,
        backgroundColor: '#aeff45',
        borderRadius: 15,    
    },
})

export default StyleDashBoard