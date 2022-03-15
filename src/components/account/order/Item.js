import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import SingleItem from './SingleItem';
import { navigate } from './../../../navigationRef';
const Item = ({ order }) => {
    let containerstyle = "";
    switch (order.type) {
        case "1":
            containerstyle = "type1view"
            break;
        case "2":
            containerstyle = "type2view"
            break;
        case "3":
            containerstyle = "type3view"
            break;
        default:
            containerstyle = "type1view";
            break;
    }
    return (
        <TouchableOpacity onPress={() => navigate('OrderDetail')} >
            <View style={styles.mainContainer}>
                <View style={styles.orderHeader}>
                    <View>
                        <Text style={styles.orderHeaderText}>Order : {order.ordernumber}</Text>
                        <Text style={styles.subHeadText}>Placed on : {order.recieved_at}</Text>
                    </View>
                    <View>
                        <Text style={styles.priceText}>{order.currency} {order.totalPrice}</Text>
                        <Text style={{ fontSize: 11 }}>{order.items.length} item(s)</Text>
                    </View>
                </View>
                <FlatList
                    data={order.items}
                    keyExtractor={result => result.id + 'o'}
                    renderItem={({ item }) => {
                        return <SingleItem item={item} />
                    }}
                />
                <View style={styles.endTextHolder}>
                    <View style={styles[containerstyle]}>
                        <Text style={styles.buttonStyle}>
                            {order.status}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );


};

const styles = StyleSheet.create({
    orderHeader: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    endTextHolder: {
        margin: 10,
    },
    priceText: {
        fontSize: 14,
        color: "#27ae60",
        marginBottom: 2
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
        fontSize: 16,
        fontWeight: "600"
    },
    namecontainer: {
        margin: 5,
        justifyContent: "space-evenly"
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
    }
});

export default Item;
