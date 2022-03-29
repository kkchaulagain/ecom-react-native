import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../../../constants';

const Size = ({ size, active, onSizeChange }) => {
    return (
        <TouchableOpacity onPress={()=>onSizeChange(size)}>
            <View style={size === active ? styles.activeContainer : styles.container}>
                <Text style={size === active ? styles.activeText : styles.textStyle}>{size}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        fontSize: 15,
        borderRadius: 20,
        backgroundColor: "#fff",
        justifyContent: 'center',
        margin: 10
    },
    activeContainer: {
        backgroundColor: COLORS.primary,

        width: 50,
        height: 50,
        fontSize: 15,
        borderRadius: 20,
        justifyContent: 'center',
        margin: 10
    },
    activeText: {

        textAlign: "center",
        fontWeight: "bold",
        color: "#fff",
    },
    textStyle: {

        textAlign: "center",
        fontWeight: "bold",
    }
});

export default Size;
