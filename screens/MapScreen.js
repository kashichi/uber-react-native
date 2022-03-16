import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptions from '../components/RideOptions';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const MapScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView>
      <TouchableOpacity style={tw`absolute top-12 left-4 shadow-lg 
        z-50 bg-gray-100 rounded-full p-3 `}
        onPress={() => navigation.navigate("HomeScreen")}>
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen name='NavigateCard' component={NavigateCard} options={{ headerShown: false }} />
          <Stack.Screen name='RideOptions' component={RideOptions} options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>

    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({})