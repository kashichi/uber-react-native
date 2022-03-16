import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../redux/slices/navSlice';

const NavOptions = () => {
    const navigation=useNavigation();
    const origin = useSelector(selectOrigin)
    const data = [
        {
            id: "123",
            title: "Get a Ride",
            image: "https://links.papareact.com/3pn",
            screen: "MapScreen"
        },
        {
            id: "456",
            title: "Order Food",
            image: "https://links.papareact.com/28w",
            screen: "EatScreen"
        }

    ]

    return (
        <View>
            <FlatList data={data} keyExtractor={(item) => item.id} horizontal renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>navigation.navigate(item.screen)} disabled={!origin} style={tw`bg-gray-200 flex justify-center items-center m-2 p-2 pt-4 pl-6 pb-8 w-40 `}>
                    <View style={tw`${!origin && `opacity-20`}`}>
                        <Image source={{ uri: item.image }} style={{ width: 120, height: 120, resizeMode: "contain" }} />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon name="arrowright" type="antdesign" color="white" style={tw`bg-black rounded-full p-2 w-10 mt-4`} />
                    </View>
                </TouchableOpacity>
            )} />
        </View>
    )
}

export default NavOptions

