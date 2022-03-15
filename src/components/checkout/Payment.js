import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Option from './Option';

const Payment = () => {
    const [method, setMethod] = useState('Cash')
    return <View style={styles.container} >
        <View style={styles.row}>
            <Text style={styles.title}>Payment Options</Text>
        </View>
        <View style={styles.row}>
            <Option onChangeState={(title)=>setMethod(title)} title="Cash" value="Cash On Delivery" active={method} />
        </View>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        backgroundColor: '#fff',
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    row: {
        marginVertical: 5,
        marginHorizontal: 10
    },
    title: {
        fontWeight: '600',
        marginTop: 5
    }
});

export default Payment;
