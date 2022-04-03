import React from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';

import {FontAwesome} from '@expo/vector-icons'
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
const Action = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.wishTextStyle}>
            <Text style={{...styles.wishnow,...FONTS.h3}}>
            <FontAwesome style={styles.iconstyle} name='heart' /> Wishlist
            </Text>
            </View> */}
            <View style={styles.TextStyle}>
                <Image 
                    style={{
                        width:20,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical:10,
                        marginRight:SIZES.padding*0.5,
                        alignContent:'center'
                    }}
                source={icons.shoppingCart} />
            <Text style={{...styles.buynow,...FONTS.h3}}>Add to cart</Text>
            </View>
        </View >
    ) 
};

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginBottom:10
    },
    TextStyle:{
        flex: 1,
        backgroundColor: COLORS.primary,
        marginHorizontal:15,
        borderRadius: SIZES.radius,
        shadowColor: COLORS.grey,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    wishTextStyle:{

        flex: 1,
        backgroundColor: COLORS.success,
        marginHorizontal:SIZES.padding,
        borderRadius: SIZES.radius,
        shadowColor: COLORS.grey,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    iconstyle:{
        fontSize:16,
        marginVertical: 10,
    },
    wishnow:{
        marginVertical: 10,
        letterSpacing:1.1,
        color:COLORS.light,
        textAlign:"center"
    },
    buynow:{
        color:COLORS.light,
        textAlign:"center",
        alignContent:"center",
        marginVertical: 10,
    }
});

export default Action;
