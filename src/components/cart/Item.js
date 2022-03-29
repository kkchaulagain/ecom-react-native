import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import Rating from '../home/Product/Rating';
import { COLORS } from '../../../constants';
const Item = ({ item }) => {
 

    return <View style={styles.container}>
        <Image style={styles.cartimage} source={item.image} />
        <View style={styles.namecontainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.subtext}>Quantity : 1</Text>
            <Text style={styles.subtext}>Size : 40</Text>
            <Text style={styles.buttonStyle}>
                <FontAwesome name="trash" /> Remove</Text>
            <View style={styles.ratingstyle} >
                <Rating active={item.rating >= 1 ? true : false} />
                <Rating active={item.rating >= 2 ? true : false} />
                <Rating active={item.rating >= 3 ? true : false} />
                <Rating active={item.rating >= 4 ? true : false} />
                <Rating active={item.rating >= 5 ? true : false} />
                <Text style={styles.ratingText}>{item.rating_count}</Text>
            </View>
        </View>
        <View style={styles.priceStyle}>
            <Text style={styles.pricingText}>{item.currency} {item.price}</Text>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 15,
        marginVertical: 5,
        backgroundColor: "#fff",
        justifyContent: "space-around",
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    priceStyle: {
        // flexDirection: "co",
        justifyContent: "center"
    },
    pricingText: {
        textAlign: "center",
        fontWeight: "600",
        color: COLORS.dark
    },
    buttonStyle: {
        color: "#e74c3c"
    },
    namecontainer: {
        margin: 5
    },
    subtext: {
        fontSize: 11,
        color: "gray",
    },
    productName: {
        fontWeight: "600",
        marginBottom: 5
    },

    cartimage: {
        width: 100,
        height: 80,
        margin: 5
    },
    ratingstyle: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
});

export default Item;
