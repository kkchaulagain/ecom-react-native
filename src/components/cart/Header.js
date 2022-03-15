import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({name}) => {
    return (
        <View style={styles.container} >
            <Text style={styles.headertext}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        height:80,
        backgroundColor:"#27ae60",
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
