import { View , Text, Image, TouchableOpacity, ScrollView, TextInput, FlatList, Keyboard } from "react-native"
import StyleDashBoard from "../styles/Style.DashBoard"
import { useState } from "react"
import ButtonPlusCircle from "../components/textButton/buttonCircle"
import StyleButtonPlusCircle from "../styles/Style.txtBut.PlusCircle"
import ButtonDelete from "../components/textButton/ButtonDelete"


const DashBoard = ()=>{

    interface Item {
        value : string
        key: number
        selected: boolean
    }

    const [value, setValue] = useState('')
    const [List, setList] = useState<Item[]>([])

    const handleSetList = (txt: string) =>{
        const item : Item = {value:txt , key:Date.now(), selected:false}
        setList([item, ...List])        
    }

    const handleRemoveItem = () => {
        const newList : Item[] = List.filter((i)=>(i.selected == false))
        setList(newList)
    }  

    const handleSetChecked = (obj : Item) => {
        const newItem : Item = {value:obj.value, selected: !obj.selected, key: obj.key}
        const newList : Item[] = List.map(item => (item.key === obj.key ? newItem : item))
        setList(newList)
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
                            onChangeText={(text)=>(setValue(text))}
                            value={value}
                        />
                        {List.every(item => !item.selected) ? 
                            (<ButtonPlusCircle style={StyleButtonPlusCircle.but} onClick={()=>{handleSetList(value)
                                setValue('')
                                Keyboard.dismiss()
                                }}/>) :
                            (<ButtonDelete onClick={handleRemoveItem}/>)                                               
                        }
                    </View>
                    <FlatList
                            data={List}
                            renderItem={({item})=>{
                                return (
                                    <View style={StyleDashBoard.headerC}>
                                        {item.selected == false ? 
                                            (<TouchableOpacity style={StyleDashBoard.box} onPress={()=>{                                                
                                                handleSetChecked(item)
                                                }
                                            } />) : 
                                            ( <TouchableOpacity style={StyleDashBoard.boxT} onPress={()=>{                                                
                                                handleSetChecked(item)
                                                }
                                                }>
                                                    <Text style={StyleDashBoard.tBox}></Text>
                                                </TouchableOpacity>
                                            )                                            
                                        }
                                        <Text style={StyleDashBoard.txtList}>{item.value}</Text>
                                    </View>
                                )
                            }}
                        />                        
                </View>
            </View>
        </View>
    )
}

export default DashBoard