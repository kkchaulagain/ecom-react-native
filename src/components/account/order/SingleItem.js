import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SingleItem = ({ item }) => {
    return <View style={styles.container}>
        <Image style={styles.cartimage} source={item.image} />
        <View style={styles.namecontainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.subtext}>Quantity : 1</Text>
            <Text style={styles.subtext}>Size : 40</Text>


        </View>
        <View style={styles.priceStyle}>
            <Text style={styles.pricingText}>{item.currency} {item.price}</Text>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    orderHeader: {
        margin: 10
    },
    orderHeaderText: {
        textAlign: "left",
        fontSize: 14
    },
    subHeadText: {
        fontSize: 12,
        color: "#7f8c8d"
    },
    mainContainer: {
        margin: 15,
        marginVertical: 5,
        backgroundColor: "#fafafa",
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 15,
        marginVertical: 5
    },
    type1view: {
        backgroundColor: '#27ae60',
        borderRadius: 20
    },
    type2view: {
        backgroundColor: '#f39c12',
        borderRadius: 20
    },
    type3view: {
        backgroundColor: '#e74c3c',
        borderRadius: 20
    },
    priceStyle: {
        justifyContent: "center"
    },
    pricingText: {
        textAlign: "center",
        fontWeight: "600",
        color: "#27ae60"
    },
    buttonStyle: {
        color: "#fff",
        textAlign: "center",
        margin: 2,
        fontSize: 12
    },
    namecontainer: {
        margin: 5,
        justifyContent: "space-evenly",
        flex:4
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
        margin: 5,
        flex:3
    }
});

export default SingleItem;
