import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SIZES, COLORS } from './constants';
const Tab = createMaterialBottomTabNavigator();

import { Provider as AuthProvider } from './src/context/AuthContext';
import {
    Welcome,
    Walkthrough,
    AuthMain,
    ForgotPassword,
    Otp
} from "./screens";
import HomeScreen from "./src/screens/HomeScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import AccountScreen from "./src/screens/AccountScreen";
import CartScreen from "./src/screens/CartScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen";
import OrderSuccessScreen from "./src/screens/OrderSuccessScreen";
import OrderDetailScreen from "./src/subscreens/Order/OrderDetailsScreen";
import MyOrdersScreen from "./src/screens/MyOrdersScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { setNavigator } from './src/navigationRef';

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
                <Stack.Screen name="Order" component={MyOrdersScreen} />
            </Stack.Navigator>
        )
    }

    function CartTab() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Cart'}
            >
                <Stack.Screen name="Cart" component={CartScreen} />
                <Stack.Screen name="Checkout" component={CheckoutScreen} />
                <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
            </Stack.Navigator>
        )
    }

    function MainFlow() {
        return (
            <Tab.Navigator initialRouteName="Home"
                activeColor={COLORS.primary}
                barStyle={{
                    backgroundColor: COLORS.light,
                    height: SIZES.bottomTabHeight
                }}>
                <Tab.Screen name="HomeTab" options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} component={HomeTab} />

                <Tab.Screen
                    name="CartTab"
                    component={CartTab}
                    options={{
                        tabBarLabel: 'Cart',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }}
                />
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
    const switchNavigator = createSwitchNavigator({
        loginFlow: AuthScreens,
        Main: mainScreens,
    },{
        initialRouteName: !isLoggedIn ? 'Main' : 'loginFlow'
    });

    
    const App = createAppContainer(switchNavigator);

    return (
        <AuthProvider>
            <NavigationContainer >
                <App ref={(navigator) => { setNavigator(navigator) }} />
            </NavigationContainer>
        </AuthProvider>
    );

}

export default App;