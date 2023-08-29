import React from "react";
import { StyleProp, TextStyle, TouchableOpacity, Image, View } from "react-native"
import StyleButtonDelete from "../../styles/Style.txtBut.Delete";


interface IpropsButtonDelete {
    onClick?: ()=>void
    style?: StyleProp<TextStyle>
}

const ButtonDelete : React.FC<IpropsButtonDelete> = ({onClick, style})=>{
    return (
        <TouchableOpacity onPress={onClick}>
            <Image
                    style={StyleButtonDelete.but}
                    source={require('./imageButton/delete.png')}
                />
        </TouchableOpacity>
    );
}

export default ButtonDelete

