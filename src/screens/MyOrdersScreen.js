import React, { useEffect, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import OrderItems from '../components/account/order/OrderItems';
import Header from './../components/cart/Header'
const MyOrdersScreen = () => {

    const orders = [
        {
            ordernumber: "121",
            totalPrice: "14,000",
            currency: "Rs",
            recieved_at: "2020-10-12 09:36:00",
            paid_at: "2020-10-12 09:36:00",
            delivered_at: "2020-10-12 09:36:00",
            status: "Failed",
            type: "3",
            items: [
                {
                    id: 1,
                    name: "Reebok Red Run",
                    price: "7000",
                    image: require('./../../assets/b.png'),
                    currency: "Rs",
                    rating: 4,
                },
                {
                    id: 2,
                    name: "Nike Sports",
                    price: "7000",
                    image: require('./../../assets/nike.png'),
                    currency: "Rs",
                    rating: 4,
                }
            ]
        },
        {
            ordernumber: "1212",
            totalPrice: "14,000",
            currency: "Rs",
            recieved_at: "2020-10-12 09:36:00",
            paid_at: "2020-10-12 09:36:00",
            delivered_at: "2020-10-12 09:36:00",
            status: "Delivered",
            type: "1",
            items: [
                {
                    id: 1,
                    name: "Reebok Red Run",
                    price: "7000",
                    image: require('./../../assets/b.png'),
                    currency: "Rs",
                    rating: 4,
                },
                {
                    id: 2,
                    name: "Nike Sports",
                    price: "7000",
                    image: require('./../../assets/nike.png'),
                    currency: "Rs",
                    rating: 4,
                }
            ]
        }
    ];



    if (orders.length) {
        return (
            <View style={{ flex: 1 }}>
                <Header name="My Orders" />
                <OrderItems orders={orders} />
            </View>
        );
    } else {
        return (
            <View>
                <Header name="My Orders" />
                <Text style={{margin:10}}>You haven't place any Orders</Text>
            </View>
        )
    }


};


const styles = StyleSheet.create({
    container: {
        margin: 15,
        flexDirection: "row",
        justifyContent: "center"
    },

    textHolder: {
        backgroundColor: "#27ae60",
        borderRadius: 10,
        width: 350,
        flex: 1,

    },
    buyText: {
        margin: 15,
        color: "#fff",
        textAlign: "center"

    }
});

MyOrdersScreen.navigationOptions = () => {
    return {
        header: () => false,
        tabBarVisible: () => false
    };
};

export default MyOrdersScreen;
