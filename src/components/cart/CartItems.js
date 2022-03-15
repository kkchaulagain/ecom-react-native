import React from 'react';
import { View,FlatList, Text, StyleSheet } from 'react-native';
import Item from './Item';

const CartItems = ({items}) => {
    return <View style={styles.container}>
        <FlatList 
         data = {items}
         keyExtractor =  {result => result.id + 'o'}
         renderItem={({ item }) => {
            return <Item item={item} />
            // return <Item item={item} />
        }}
         />
    </View>;
};

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        // flex:1
    }
});

export default CartItems;
