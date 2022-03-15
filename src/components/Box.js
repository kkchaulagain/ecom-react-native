import React from 'react';
import { View, StyleSheet } from 'react-native';

const Box = ({ children }) => {
    return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15,
        backgroundColor: "#fff",
        borderRadius:10,
        padding: 15,
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

    }
});

export default Box;
