import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OrderAction = ({ onPurchase }) => {
    return <View style={styles.container} >
        <TouchableOpacity
            onPress={onPurchase}
        >
            <View style={styles.textHolder}>
                <Text style={styles.buyText}>Continue Shopping</Text>
            </View>
        </TouchableOpacity>

    </View>;
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flexDirection: "row",
        justifyContent: "center"
    },

    textHolder: {
        backgroundColor: "#27ae60",
        borderRadius: 10,
        width: 350,
        flex: 1,

    },
    buyText: {
        margin: 15,
        color: "#fff",
        textAlign: "center"

    }
});

export default OrderAction;
