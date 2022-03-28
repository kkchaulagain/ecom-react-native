import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import {COLORS,FONTS,SIZES} from '../../../constants';

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
        marginTop: SIZES.margin,
        fontSize: FONTS.body4.fontSize,
        fontFamily: FONTS.body4.fontFamily,
        color: COLORS.backgroundColor
    },
    activetext: {
        textAlign: "center",
        marginTop: 10,
        color: COLORS.primary,
        fontSize: FONTS.body3.fontSize,
        fontFamily: FONTS.body3.fontFamily,
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
        backgroundColor: COLORS.primary,
    }
});

export default SingleCategory;
