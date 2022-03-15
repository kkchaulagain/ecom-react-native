import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';

const FilterComponent = ({ name, state,onPressFilter }) => {
    return (
        <TouchableOpacity onPress={() => onPressFilter(name)}>

            <View style={state == name ? styles.activeLayout : styles.Layout}>
                <Text style={state == name ? styles.activetextStyle : styles.textStyle}>{name}</Text>
            </View>

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    Layout: {
        width: 100,
        height: 50,
        borderColor: "#fff",
        backgroundColor: "#fff",
        borderWidth: 2,
        justifyContent: "space-evenly",
        borderRadius: 30
    },
    activeLayout: {
        width: 100,
        height: 50,
        borderColor: "#F39A2D",
        backgroundColor: "#F39A2D",
        borderWidth: 2,
        justifyContent: "space-evenly",
        borderRadius: 30
    },
    activetextStyle: {
        textAlign: "center",
        fontSize: 22,
        letterSpacing:1.5,
        fontWeight: "600",
        color: "white"
    },
    textStyle: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "600",
        color: "black"
    }
});

export default FilterComponent;
