import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { setDestination, setOrigin } from '../redux/slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import { Icon } from 'react-native-elements';
import {GOOGLE_MAPS_APIKEY}  from './../Variables';
const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();


    return (
        <SafeAreaView style={tw`h-full bg-white`}>
            <View style={tw`p-5`}>
                <Image style={{ width: 100, height: 100, resizeMode: "contain" }}
                    source={{ uri: 'https://links.papareact.com/gzs' }} />
            </View>

            <GooglePlacesAutocomplete
                placeholder='Search'
                debounce={400}
                fetchDetails={true}
                minLength={2}
                returnKeyType="search"
                enablePoweredByContainer={false}
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        fontSize: 18
                    }
                }}
                onPress={(data, details = null) => {

                    dispatch(setOrigin({
                        location: {
                            lat: details.geometry.location.lat,
                            lng: details.geometry.location.lng,
                        },
                        description: data.description
                    }))
                    dispatch(setDestination(null))


                }}
                onFail={error => console.error(error)}
                query={{
                    key:"api_key",
                    language: 'en',
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
            />

            <NavOptions />
            <NavFavourites />
          
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})