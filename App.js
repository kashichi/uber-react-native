import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './screens/MapScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>

      <NavigationContainer>

        <SafeAreaProvider>
          <KeyboardAvoidingView style={{flex:1}}>
            <Stack.Navigator>
              <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name='MapScreen' component={MapScreen} options={{ headerShown: false }} />



            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>

      </NavigationContainer>

    </Provider>
  );
}

const styles = StyleSheet.create({

});
