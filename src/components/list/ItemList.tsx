import React, {useState} from "react"
import { View, TouchableOpacity, StyleProp, TextStyle, Text } from "react-native"
import StyleItemList from "../../styles/Style.ItemList"

interface PropItemList {
    label: String
    onClick?: ()=>void
    style?: StyleProp<TextStyle>
}

const ItemList : React.FC<PropItemList> = ({label, onClick, style})=>{
    return(
        <View style={StyleItemList.container}>
            <TouchableOpacity style={StyleItemList.but}/>
            <Text style={StyleItemList.label}>{label}</Text>
        </View>
    )
}

export default ItemList