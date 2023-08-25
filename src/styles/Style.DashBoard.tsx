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
        top: -20,
        width: 100,
        height: 100,
        borderRadius: 60,
    },
    imgGroup:{
        marginTop: 25,
        width: 127,
        height: 127,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginTop: -10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 8,
        color: 'black', 
        marginLeft: -240,     
    },
    containeList: {
        backgroundColor: '#FFFAE1',
        marginTop: 12,
        height: 315,
        width: 355,
        borderRadius: 15,
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
        backgroundColor: 'white',
        borderRadius: 4,
        width: 185,
        height: 30,
        padding: 2,
        fontSize: 18,
        maxWidth: 185,
        marginLeft: 10,
    },
    txtList:{
        fontSize: 20,
        marginVertical: 2,
        marginHorizontal: 4,
        paddingLeft: 5,
        backgroundColor: 'white',
        textAlign: 'center',
    }
})

export default StyleDashBoard