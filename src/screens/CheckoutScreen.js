import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import OrderSummary from '../components/checkout/OrderSummary';
import CheckoutTotal from './../components/cart/CartTotal'
import CartAction from './../components/cart/CartAction'
import Header from './../components/cart/Header'
import CheckoutAction from '../components/checkout/CheckoutAction';
import { ScrollView } from 'react-native-gesture-handler';
const CheckoutScreen = ({ navigation }) => {
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
        <View style={styles.container}>
            <Header name="Checkout" />
            <ScrollView>
                <OrderSummary />
                <CheckoutTotal cartitems={cartitems} />
                <CheckoutAction
                    onPurchase={() => navigation.navigate('OrderSuccess')}
                />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

CheckoutScreen.navigationOptions = () => {
    return {
        header: () => false,
        tabBarVisible: () => false
    };
};
export default CheckoutScreen;
