import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import {
    Welcome,
    Walkthrough,
    AuthMain,
    ForgotPassword,
    Otp
} from "./screens";

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

    const AuthScrenns = () => {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Welcome'}
            >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Walkthrough" component={Walkthrough} />

                <Stack.Screen name="AuthMain" component={AuthMain} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Otp" component={Otp} />
            </Stack.Navigator>
        )
    }

    
    return (
        <NavigationContainer>
            {AuthScrenns()}
            
        </NavigationContainer>
    )
}

export default App;