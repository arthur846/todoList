import React from "react";
import { StyleProp, TextStyle, TouchableOpacity, Image } from "react-native"


interface IpropsButtonPlus {
    onClick?: ()=>void
    style?: StyleProp<TextStyle>
}

const ButtonPlusCircle : React.FC<IpropsButtonPlus> = ({onClick, style})=>{
    return (
        <TouchableOpacity style={style} onPress={onClick}>
            <Image
                source={require('./imageButton/plusCircle.png')}
            />
        </TouchableOpacity>
    );
}

export default ButtonPlusCircle

