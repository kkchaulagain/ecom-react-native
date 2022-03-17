import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import CartScreen from './src/screens/CartScreen';
import HomeScreen from './src/screens/HomeScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import OrderSuccessScreen from './src/screens/OrderSuccessScreen';
import MyOrdersScreen from './src/screens/MyOrdersScreen';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen';
import OrderDetailScreen from './src/subscreens/Order/OrderDetailScreen';
import AddressBookScreen from './src/subscreens/addressbook/AddressBookScreen';


const CheckoutFlow = () => createStackNavigator({
  Cart: CartScreen,
  Checkout: CheckoutScreen,
  OrderSuccess:OrderSuccessScreen
});

const AccountFlow = () => createStackNavigator({
  Account: AccountScreen,
  Order: MyOrdersScreen,
  ChangePassword:ChangePasswordScreen,
  OrderDetail:OrderDetailScreen,
  AddressBook:AddressBookScreen
});
const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: HomeScreen,
      TrackDetail: TrackDetailScreen,
      ProductDetail:ProductDetailScreen
    }),
    TrackCreate: CheckoutFlow(),
    Account: AccountFlow(),
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
