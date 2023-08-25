import { StyleProp, TextStyle, TouchableOpacity, Text, Image } from "react-native"


interface IpropsButtonLogin {
    image?: Image
    onClick?: ()=>void
    style?: StyleProp<TextStyle>
}

const ButtonLogin : React.FC<IpropsButtonLogin> = ({image, onClick, style})=>{
    return (
        <TouchableOpacity style={style} onPress={onClick}>
            <Image
                source={require('./imageButton/buttonLogin.png')}
            />
        </TouchableOpacity>
    );
}

export default ButtonLogin