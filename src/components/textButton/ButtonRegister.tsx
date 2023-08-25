import { StyleProp, TextStyle, TouchableOpacity, Text, Image } from "react-native"


interface IpropsButtonRegister{
    image?: Image
    onClick?: ()=>void
    style?: StyleProp<TextStyle>
}

const ButtonRegister : React.FC<IpropsButtonRegister> = ({image, onClick, style})=>{
    return (
        <TouchableOpacity style={style} onPress={onClick}>
            <Image
                source={require('./imageButton/buttonRegistration.png')}
            />
        </TouchableOpacity>
    );
}

export default ButtonRegister