import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const data =[
    {
        id:'123',
        title:"Get a rider",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen"
    },
    {
        id:"456",
        title:"Order Food",
        image:"https://links.papareact.com/28w",
        screen:"EatScreen"
    }
]

const NavOptions = () => {
    const navigation = useNavigation()
  return (
    <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        horizontal
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate(item.screen)} className='p-2 pl-6 pb-8 pt-2 bg-gray-200 m-2 w-40 rounded-md'>
                <View>
                    <Image
                        style={{width:120, height:120, resizeMode:'contain'}}
                        source={{uri:item.image}}
                    />
                    <Text className="text-lg font-semibold mt-2">{item.title}</Text>
                </View>
                <Icon name='arrowright' color='white' type='antdesign'  style={styles.icon} />
            </TouchableOpacity>
  )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({
    icon: {
        backgroundColor:"black",
        borderRadius:20,
        width:32,
        marginTop:10,
        padding:3


    }
})
