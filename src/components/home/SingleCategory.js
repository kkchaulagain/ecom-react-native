import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { urilize } from '../../utils/helpers/common';

const SingleCategory = ({ category, selectedCategory, setSelectedCategory }) => {
    let { name, _id, image_url } = category;
    console.log(category);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { setSelectedCategory(category) }}>

                <Image style={selectedCategory&& selectedCategory._id === _id ? styles.activeproductImage : styles.productImage} source={urilize(image_url)} />

                <Text style={selectedCategory&&selectedCategory._id === _id ? styles.activetext : styles.text}>{name}</Text>
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
        color: COLORS.dark,
        textTransform: "capitalize"
    },
    activetext: {
        textAlign: "center",
        marginTop: 10,
        color: COLORS.primary,
        fontSize: FONTS.body3.fontSize,
        fontFamily: FONTS.body3.fontFamily,
        textTransform: "capitalize"
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
