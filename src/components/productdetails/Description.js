import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Description = ({ product }) => {
    return (
        // <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    {product.description}
                </Text>
            </View>
        // </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal:15,
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    textStyle: {
        lineHeight: 25
    }
});

export default Description;
