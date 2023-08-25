import { View , Text, Image, TouchableOpacity, ScrollView } from "react-native"
import StyleDashBoard from "../styles/Style.DashBoard"
import ButtonCircle from "../components/textButton/buttonCircle"
import ItemList from "../components/list/ItemList"

const DashBoard = ()=>{
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
                    <View style={StyleDashBoard.header}>
                        <Text style={StyleDashBoard.titleList}>Daily Tasks</Text>   
                        <ButtonCircle style={StyleDashBoard.imgPlus} onClick={()=>(console.log('Clicou no circle!'))}/>
                    </View>
                    <ScrollView>
                        <ItemList label={'jbdfjbdjfbsdhf'}/>
                        <ItemList label={'jbdfjbdjfbsdhf'}/>
                        <ItemList label={'jbdfjbdjfbsdhf'}/>
                        <ItemList label={'jbdfjbdjfbsdhf'}/>
                        <ItemList label={'jbdfjbdjfbsdhf'}/>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default DashBoard