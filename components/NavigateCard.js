import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux';
import { setDestination } from '../redux/slices/navSlice';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';

const NavigateCard = ({ navigation }) => {

    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
           
            <View style={tw`border-t-2 border-gray-100`}>

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
                            padding: 20,
                            backgroundColor: "white"
                        },
                        textInput: {
                            fontSize: 18,
                            borderRadius: 0,
                            backgroundColor: "#DDDDDF"
                        },
                        textInputContainer: {
                            paddingHorizontal: 20,
                            paddingVertical: 10
                        }
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setDestination({
                            location: {
                                lat: details.geometry.location.lat,
                                lng: details.geometry.location.lng,
                            },
                            description: data.description
                        }))
                        navigation.navigate("RideOptions")



                    }}
                    onFail={error => console.error(error)}
                    query={{
                        key: "api_key",
                        language: 'en',
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                />

            </View>
            <NavFavourites />
            <View style={tw`p-2 justify-evenly flex flex-row`}>
                <TouchableOpacity style={tw`p-3 w-24 bg-black rounded-full flex flex-row justify-around`} onPress={() =>navigation.navigate("RideOptions")}>
                    <Icon name="car" type="font-awesome" size={16} color="white" />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`p-3 w-24 rounded-full flex flex-row justify-around`}>
                    <Icon name="fast-food" type="ionicon" size={16} color="black" />
                    <Text style={tw` text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
          
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
