import { StyleSheet } from "react-native";

const StyleItemList = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FBF4C9',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        overflow: 'hidden',
        borderRadius: 5,
    },
    but:{
        marginLeft: 5,
        borderWidth: 1,
        width: 16,
        height: 16,
        borderRadius: 0,
        margin: 8,
        borderColor: 'black',
    },
    label:{
        fontSize: 20,
        textAlign: 'center',
        margin: 3,
        marginRight: 32,
        paddingRight: 5,
        paddingLeft: 5,
    },
})

export default StyleItemList