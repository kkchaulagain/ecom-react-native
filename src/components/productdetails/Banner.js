import React from 'react';
import { View,Image, Text, StyleSheet } from 'react-native';

const Banner = ({product}) => {
 
    return <View style={styles.container}>
        <Image style={styles.productImage} source={product.image} />

    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom:5
    },
    productImage: {
        width: 379,
        height: 250,
        // marginBottom: 10,
        marginTop:0,
        margin:0,
        borderTopLeftRadius: 25,
        borderTopRightRadius:25
    }
});

export default Banner;
