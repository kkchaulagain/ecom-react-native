import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CartItems from '../../components/cart/CartItems';
import CartTotal from '../../components/cart/CartTotal';

import Header from './../../components/cart/Header'
import OrderInfo from './components/OrderInfo';
import Timeline from './components/Tracker';

const OrderDetailScreen = () => {
    const cartitems = {
        id: "121",
        status:"Delivered",
        currency: "Rs",
        total: "22700",
        subtotal: "21000",
        reciever: {
            name:"Kiran Chaulagain",
            address:"Gokarneshwor-5, Kathmandu"
        },
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
                image: require('./../../../assets/nike.png'),
                currency: "Rs",
                rating: 4
            },
            {
                id: 2,
                name: "Reebok Red Run",
                price: "7000",
                image: require('./../../../assets/nike.png'),
                currency: "Rs",
                rating: 4
            },
            {
                id: 3,
                name: "Reebok Red Run",
                price: "7000",
                image: require('./../../../assets/nike.png'),
                currency: "Rs",
                rating: 4
            }
        ], 
        events: [
            { time: '09:00', title: 'Order Placed', description: '26th July' },
            { time: '10:45', title: 'Order Accepted', description: '27th July' },
            { time: '12:00', title: 'Processing Order', description: '27th July' },
            { time: '14:00', title: 'Completed', description: '28th July' },
            { time: '16:30', title: 'Review Recieved', description: '30th July' }
        ]
    };
    return (
        <View style={styles.container}>
            <Header name="Order Details" />
            <ScrollView>
                <OrderInfo data={cartitems} />
                <Timeline data={cartitems.events} />
            
                <CartItems style={{ flex: 1 }} items={cartitems.items} />
                <CartTotal cartitems={cartitems} />


            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
OrderDetailScreen.navigationOptions = () => {
    return {
        header: () => false,
        tabBarVisible: () => false
    };
};

export default OrderDetailScreen;
