import { StyleProp, TextStyle, TouchableOpacity, Image } from "react-native"


interface IpropsButtonCircle {
    image?: Image
    onClick?: ()=>void
    style?: StyleProp<TextStyle>
}

const ButtonCircle : React.FC<IpropsButtonCircle> = ({image, onClick, style})=>{
    return (
        <TouchableOpacity style={style} onPress={onClick}>
            <Image
                source={require('./imageButton/plusCircle.png')}
            />
        </TouchableOpacity>
    );
}

export default ButtonCircle