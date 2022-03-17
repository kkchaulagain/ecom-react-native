import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();



import {
    Welcome,
    Walkthrough,
    AuthMain,
    ForgotPassword,
    Otp
} from "./screens";
import HomeScreen from "./src/screens/HomeScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";

const Stack = createStackNavigator();


const App = () => {

    const [loaded] = useFonts({
        "Poppins-Black": require('./assets/fonts/Poppins-Black.ttf'),
        "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
        "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
        "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
    })

    if (!loaded) {
        return null;
    }
    const isLoggedIn = true;


    const AuthScreens = () => {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Walkthrough'}
            >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Walkthrough" component={Walkthrough} />

                <Stack.Screen name="AuthMain" component={AuthMain} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Otp" component={Otp} />
            </Stack.Navigator>
        )
    }

    function mainScreens() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            </Stack.Navigator>

        );
    }
    return (
        <NavigationContainer>
            {!isLoggedIn ? AuthScreens() : mainScreens()}
        </NavigationContainer>
    )
}

export default App;