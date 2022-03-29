import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';
import Rating from './../home/Product/Rating';

const Title = ({ product }) => {
    return <View style={styles.container}>
        <View style={styles.productFirstColumn} >
            <Text style={styles.TitleText} >{product.name} </Text>
            <Text style={styles.priceText} >{product.currency} {product.price} </Text>


        </View>
        <View style={styles.ratingstyle} >
            <Rating active={product.rating >= 1 ? true : false} />
            <Rating active={product.rating >= 2 ? true : false} />
            <Rating active={product.rating >= 3 ? true : false} />
            <Rating active={product.rating >= 4 ? true : false} />
            <Rating active={product.rating >= 5 ? true : false} />
            <Text style={styles.ratingText}>{product.rating_count}</Text>
        </View>
    </View>;

};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        backgroundColor: "#fafafa"
    },
    productImage: {
        width: 200,
        height: 200,
        marginBottom: 10,
        borderRadius: 25
    },
    ratingText: {
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 5
    },
    TitleText: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        color: '#000'
    },
    priceText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.dark
    },
    productName: {
        fontSize: 20,
        fontWeight: "600"
    },
    productFirstColumn: {
        flexDirection: "row"
    },
    ratingstyle: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
});

export default Title;
