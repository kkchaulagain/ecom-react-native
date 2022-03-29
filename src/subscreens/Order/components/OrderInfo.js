import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderInfo = ({ data }) => {
    return <View style={styles.container}>
        <Text style={styles.orderTitle}>Order Number : #{data.id}</Text>
        <Text style={styles.subText}>{data.reciever.name}</Text>
        <Text style={styles.subText}>{data.reciever.address}</Text>
        <Text style={styles.orderStatus}>Status: {data.status}</Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        padding: 15,
        backgroundColor: '#fff',
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    orderStatus: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 4,
    },
    orderTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#27ae60"
    },
    subText: {
        fontSize: 12,
        color: "#000",
        marginTop: 2
    }
});

export default OrderInfo;
