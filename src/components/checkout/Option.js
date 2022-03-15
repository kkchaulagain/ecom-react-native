import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
const Option = ({ title, value, active, onChangeState }) => {
    return (
        <TouchableOpacity
            onPress={() => onChangeState(title)}
        >
            <View style={styles.container} >
                <View style={styles.addresstitleholder}>
                    <View style={styles.left}>
                        <Text style={styles.addresstitle}>{title}</Text>
                        <View style={styles.addressholder}>
                            <Text style={styles.address}>{value}</Text>
                        </View>
                    </View>

                    <View style={active == title ? styles.iconBackground : styles.none}>

                        <FontAwesome style={styles.iconStyle} name="check" />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 0,
        marginBottom: 5
    },
    left: {
        flex: 1
    },
    addresstitleholder: {
        borderWidth: 1,
        borderColor: "#27ae60",
        backgroundColor: "#eee",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    addressholder: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    none: {
        display: "none",
    },
    iconBackground: {
        margin: 5,
        backgroundColor: "#27ae60",
        borderRadius: 40,
        width: 30,
        height: 30,
        justifyContent: "center"
    },
    iconStyle: {
        color: "white",
        fontSize: 15,
        margin: 5,
        textAlign: "center"

    },
    addresstitle: {
        margin: 5,
        fontSize: 10,
        color: "#27ae60",
        fontWeight: "bold"
    },
    address: {
        marginHorizontal: 5,
        marginBottom:5
    }

});

export default Option;
