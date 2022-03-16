import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux'
import { setOrigin } from '../redux/slices/navSlice'

const NavFavourites = () => {
    const data = [{
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'London Eye, London, UK'
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'London Bridge, London, UK'
    }]
    return (
        <FlatList data={data} keyExtractor={(item) => item.id} style={tw`flex flex-col p-5`}
            renderItem={({ item }) =>
                <TouchableOpacity style={tw`flex flex-row items-center`}>
                    <Icon name={item.icon} style={tw`p-3 bg-gray-300 rounded-full mr-2`} type="ionicon" size={18} color="white" />
                    <View style={tw`flex flex-col py-2 px-4`}>
                        <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
                        <Text style={tw`text-gray-500`}>{item.destination}</Text>
                    </View>
                </TouchableOpacity>
            } />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})