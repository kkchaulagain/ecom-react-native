import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SIZES,COLORS} from './constants';
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
import { BottomNavigation } from "react-native-paper";
import AccountScreen from "./src/screens/AccountScreen";

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


    function HomeTab() {
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
        )
    }

    function AccountTab() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Account'}
            >
                <Stack.Screen name="Account" component={AccountScreen} />
            </Stack.Navigator>
        )
    }

    function MainFlow() {
        return (
          <Tab.Navigator  initialRouteName="Home"
          activeColor={COLORS.primary}
          barStyle={{
               backgroundColor: COLORS.light,
               height:SIZES.bottomTabHeight
          }}>
            <Tab.Screen name="Home"  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} component={HomeTab} />
             <Tab.Screen
        name="Profile"
        component={AccountTab}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
          </Tab.Navigator>
        );
      }

    function mainScreens() {
      // bottom tab navigator
        
      return (
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainFlow}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
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