import {TouchableOpacity,StyleProp,TextStyle,Text } from 'react-native'

interface IPropsTextButton {
    label: string ,
    onClick? : ()=>void 
    style? : StyleProp<TextStyle>
}
const TextButton : React.FC<IPropsTextButton> = ({label,onClick,style})=>{
    return (
        <TouchableOpacity onPress={onClick} >
            <Text style={style}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TextButton