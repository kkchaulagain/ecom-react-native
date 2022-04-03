import React from 'react';
import { View,Image, Text, StyleSheet } from 'react-native';
import { SIZES } from '../../../constants';
import { urilize } from '../../utils/helpers/common';

const Banner = ({product}) => {
    const images = product.images;
    const imageUrl = urilize(images[0].url);
 
    return <View style={styles.container}>
        <Image style={styles.productImage} source={imageUrl} />

    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.padding*1.5
    },
    productImage: {
        width: SIZES.width,
        height: SIZES.height * 0.4
    }
});

export default Banner;
