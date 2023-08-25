import { StyleProp, TextStyle, TouchableOpacity, Text, Image } from "react-native"


interface IpropsButtonStarted {
    image?: Image
    onClick?: ()=>void
    style?: StyleProp<TextStyle>
}

const ButtonStarted : React.FC<IpropsButtonStarted> = ({image, onClick, style})=>{
    return (
        <TouchableOpacity style={style} onPress={onClick}>
            <Image
                source={require('./imageButton/button.png')}
            />
        </TouchableOpacity>
    );
}

export default ButtonStarted