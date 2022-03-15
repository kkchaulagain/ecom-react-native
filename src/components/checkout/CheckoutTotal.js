import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SubText from './SubText';

const CheckoutTotal = () => {
    return <View style={styles.container} >
        <SubText title="Sub-Total" value="Rs 28,000" />
        <SubText title="Tax" value="Rs 1,700" />
        {/* <SubText title ="Discou" value="Rs 1,700" /> */}
        <View style={styles.hr}></View>
        <View style={styles.row}>
            <Text style={styles.flex1}>Total</Text>
            <Text style={{ fontWeight: "bold" }}>Rs 2000</Text>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        backgroundColor: "#fff",
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    hr: {
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        marginHorizontal: 10
    },
    row: {
        flexDirection: "row",
        margin: 10,


    },
    flex1: {
        flex: 1,
        fontSize: 16,
        fontWeight: "600"
    }
});

export default CheckoutTotal;
