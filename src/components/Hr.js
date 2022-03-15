import React from 'react';
import { View, StyleSheet } from 'react-native';

const Hr = () => {
    return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
    container: {
        marginVertical:5,
        borderTopColor:"#ddd",
        borderTopWidth:1

    }
});

export default Hr;
