import { View , Text, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from "react-native"
import StyleDashBoard from "../styles/Style.DashBoard"
import { useState } from "react"
import ButtonPlusCircle from "../components/textButton/buttonCircle"
import StyleButtonPlusCircle from "../styles/Style.txtBut.PlusCircle"


const DashBoard = ()=>{

    const [label, setLabel] = useState('')
    const [List, setList] = useState<string[]>([])

    const handleSetList = (item: string) =>{
        setList([...List, item])        
    }

    return (
        <View style={StyleDashBoard.container}>
            <Image
                source={require('./images/shape2.png')}
                style={StyleDashBoard.imgShape}
            />
            <Image
                source={require('./images/pexels_andrea.jpg')}
                style={StyleDashBoard.imgElipse}
                />
            <Text style={StyleDashBoard.title}> Welcome Mary! </Text>
            <View style={StyleDashBoard.subContainer}>
                <Image
                    source={require('./images/group.png')}
                    style={StyleDashBoard.imgGroup}
                />
                <Text style={StyleDashBoard.text}>Tasks List</Text>
                <View style={StyleDashBoard.containeList}>
                    <View style={StyleDashBoard.headerC}>
                        <Text style={StyleDashBoard.titleList}>Daily Tasks</Text>
                        <TextInput 
                            style={StyleDashBoard.inputTxt} 
                            onChangeText={(text)=>(setLabel(text))}
                        />
                        <ButtonPlusCircle style={StyleButtonPlusCircle.but} onClick={()=>{handleSetList(label)}}/>
                    </View>
                    <FlatList
                            data={List}
                            renderItem={({item})=>{
                                return (
                                    <Text style={StyleDashBoard.txtList}>{item}</Text>
                                )
                            }}
                        />                        
                </View>
            </View>
        </View>
    )
}

export default DashBoard