import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTravelTime } from '../redux/slices/navSlice'

const RideOptions = ({navigation}) => {
    const [selected, setSelected] = useState(null);
    const travelTime = useSelector(selectTravelTime);
    const data = [
        {
            id: "Uber-X",
            title: "Uber X",
            multipler: 1,
            image: "https://links.papareact.com/3pn"

        },
        {
            id: "Uber-XL",
            title: "Uber XL",
            multipler: 1.2,
            image: "https://links.papareact.com/5w8"

        },
        {
            id: "Uber-LUX",
            title: "Uber LUX",
            multipler: 1.75,
            image: "https://links.papareact.com/7pf"

        }
    ]
    const SURGE_CHARGE_RATE = 1.5;
    const renderItem = ({ item }) => {
        return (<TouchableOpacity onPress={() => setSelected(item)} style={tw`flex justify-around flex-row items-center 
        ${selected?.id === item.id && `bg-gray-200`}`}>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} resizeMode="contain" />

            <View style={tw`flex flex-col`}>
                <Text style={tw`font-bold text-lg`}>{item.title}</Text>
                <Text>{travelTime?.duration?.text} Travel Time</Text>
            </View>

            <Text style={tw`font-bold text-lg`}>${(travelTime?.duration?.value * SURGE_CHARGE_RATE * item.multipler / 100).toFixed(2)}</Text>

        </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={tw`flex-grow bg-white`}>
            <View style={tw`flex w-3/4 flex-row justify-around py-3 items-center`}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon name="chevron-left" type="font-awesome" style={tw`mt-1`} color="black" size={16} />
                </TouchableOpacity>
                <Text style={tw`text-lg font-bold text-center`}>Select a Ride - {travelTime?.distance?.text}</Text>
            </View>
            <View style={tw`flex-1`}>
                <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({ item }) =>
                    renderItem({ item })
                }
                />

            </View>
            <View style={tw` px-1 py-1 h-1/6`}><TouchableOpacity disabled={!selected}
                style={tw`flex-1 bg-black flex items-center justify-center
            ${!selected && `bg-gray-300`}`}>
                <Text style={tw`text-white text-center text-lg`}>Choose {selected?.title}</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptions

const styles = StyleSheet.create({})