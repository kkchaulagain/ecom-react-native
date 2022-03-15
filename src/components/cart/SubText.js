import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SubText = ({ value, title,type }) => {
    return (
        <View style={styles.row}>
            <Text style={styles.flex1}>{title}</Text>
            <Text style={parseInt(type)===2?styles.discount:{}}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        margin: 10,

    },
    flex1: {
        flex: 1,
        fontSize: 14
    },
    discount: {
        fontSize: 14,
        color:"red"
    }
});

export default SubText;
