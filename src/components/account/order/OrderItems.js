import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Item from './Item';

const OrderItems = ({ orders }) => {

    return <View style={styles.container}>
        <FlatList
            data={orders}
            keyExtractor={result => result.ordernumber + 'o'}
            renderItem={({ item }) => {
                return <Item order={item} />
            }}
        />
    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        // height:200,
        flex: 1
    }
});

export default OrderItems;
