import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const Header = ({name}) => {
    return (
        <View style={styles.container} >
            <Text style={styles.headertext}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        height:SIZES.headerHeight,
        backgroundColor:COLORS.primary,
        justifyContent:"flex-end",
        marginBottom:3
    },
    headertext:{
        fontSize:18,
        fontWeight:"bold",
        letterSpacing:1.2,
        color:"white",
        textAlign:"center",
        marginBottom:10
    }
});

export default Header;
