import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Option from './Option';

const Billings = () => {
    const [addr, setAddr] = useState('Home Address');
    return <View style={styles.container} >
        <View style={styles.row}>
            <Text style={styles.title}>Billing Address</Text>
        </View>
        <View style={styles.row}>
            <Option
                onChangeState={(title) => setAddr(title)}
                active={addr} title="Home Address" value="Gokarneshwor-5,Kathmandu, Nepal" />

            <Option
                onChangeState={(title) => setAddr(title)}
                active={addr} title="Office Address" value="Gokarneshwor-5,Kathmandu, Nepal" />

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

export default Billings;
