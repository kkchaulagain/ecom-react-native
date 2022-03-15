import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Billings from './Billings';
import Payment from './Payment';

const OrderSummary = () => {
    return <View style={styles.container} >
        <Billings />
        <Payment />
    </View>;
};

const styles = StyleSheet.create({
    container:{
        margin:0
    }
});

export default OrderSummary;
