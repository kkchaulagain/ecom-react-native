import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

const SingleCategory = ({ image, state, name,onPressProduct }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onPressProduct(name)}>

                <Image style={name === state ? styles.activeproductImage : styles.productImage} source={image} />

                <Text style={name === state ? styles.activetext : styles.text}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    text: {
        textAlign: "center",
        marginTop: 10,
        fontWeight: '600',
        fontSize: 17
    },
    activetext: {
        textAlign: "center",
        marginTop: 10,
        fontWeight: '600',
        color: '#F39A2D',
        fontSize: 17,
        letterSpacing:1.1
    },
    productImage: {
        width: 40,
        height: 40,
        borderRadius: 25
    },
    activeproductImage: {
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: '#F39A2D'
    }
});

export default SingleCategory;
