import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CartAction from '../components/cart/CartAction';
import CartItems from '../components/cart/CartItems';
import CartTotal from '../components/cart/CartTotal';
import Header from './../components/cart/Header'

const CartScreen = ({ navigation }) => {

  const cartitems = {
    currency: "Rs",
    total: "22700",
    subtotal: "21000",
    charges: [
      {
        id: "eb",
        name: "Discount",
        type: 2,
        value: "100"
      },
      {
        id: "1a",
        name: "Tax",
        type: 1,
        value: "1700"
      },
      {
        id: "1b",
        name: "Delivery Charge",
        type: 1,
        value: "100"
      }
    ],
    items: [
      {
        id: 1,
        name: "Reebok Red Run",
        price: "7000",
        image: require('./../../assets/nike.png'),
        currency: "Rs",
        rating: 4
      },
      {
        id: 2,
        name: "Reebok Red Run",
        price: "7000",
        image: require('./../../assets/nike.png'),
        currency: "Rs",
        rating: 4
      },
      {
        id: 3,
        name: "Reebok Red Run",
        price: "7000",
        image: require('./../../assets/nike.png'),
        currency: "Rs",
        rating: 4
      }
    ]
  };

  return (
    <View style={{ flex: 1 }}>
      <Header name="My Cart" />

      <ScrollView>
        <CartItems style={{ flex: 1 }} items={cartitems.items} />

        <CartTotal cartitems={cartitems} />
        <CartAction onCheckout={() => { navigation.navigate("Checkout") }} />
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({});
CartScreen.navigationOptions = () => {
  return {
    header: () => false,
    tabBarVisible: () => false
  };
};
export default CartScreen;
