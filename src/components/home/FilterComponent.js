import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';

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
        borderColor: COLORS.light,
        backgroundColor: COLORS.light,
        borderWidth: 2,
        justifyContent: "space-evenly",
        borderRadius: 30
    },
    activeLayout: {
        width: 100,
        height: 50,
        borderColor: COLORS.primary,
        backgroundColor:COLORS.primary,
        borderWidth: 2,
        justifyContent: "space-evenly",
        borderRadius: 30
    },
    activetextStyle: {
        textAlign: "center",
        fontSize: FONTS.body2.fontSize,
        letterSpacing:FONTS.body2.letterSpacing,
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
