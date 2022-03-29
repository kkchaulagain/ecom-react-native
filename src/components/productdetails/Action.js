import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {FontAwesome} from '@expo/vector-icons'
import { COLORS } from '../../../constants';
const Action = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wishTextStyle}>
            <Text style={styles.wishnow}>
            <FontAwesome style={styles.iconstyle} name='heart' /> Wishlist</Text>
            </View>
            <View style={styles.TextStyle}>
            <Text style={styles.buynow}>Buy Now</Text>
            </View>
        </View >
    ) 
};

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginBottom:10
        // borderWidth:4
    },
    TextStyle:{

        flex: 1,
        backgroundColor: COLORS.success,
        marginHorizontal:15,
        borderRadius: 20,
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      
    },
    wishTextStyle:{

        flex: 1,
        backgroundColor: "#fff",
        marginHorizontal:15,
        color :"#000",
        borderRadius: 20,
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    iconstyle:{
        fontSize:20,
        margin: 10,
    },
    wishnow:{
        // justifyContent:"",
        fontSize:19,
        fontWeight:"600",

        marginVertical: 10,
        letterSpacing:1.1,
        color:COLORS.secondary,
        textAlign:"center"
    },
    buynow:{
        // justifyContent:"",
        fontSize:19,
        fontWeight:"600",

        marginVertical: 10,
        color:"white",
        textAlign:"center"
    }
});

export default Action;
