import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { COLORS,FONTS, SIZES } from '../../../constants';
import Rating from './../home/Product/Rating';

const Title = ({ product }) => {
    return <View style={styles.container}>
        <View style={{
            flex:   1,
            paddingRight: SIZES.padding*0.4,
        }} >
       
        <Text style={{...styles.TitleText,...FONTS.h3}} >{product.name} </Text>
        <View style={styles.ratingstyle} >
            <Rating active={product.rating >= 1 ? true : false} />
            <Rating active={product.rating >= 2 ? true : false} />
            <Rating active={product.rating >= 3 ? true : false} />
            <Rating active={product.rating >= 4 ? true : false} />
            <Rating active={product.rating >= 5 ? true : false} />
            <Text style={styles.ratingText}>{product.rating_count}</Text>
        </View>
        </View>
          
        <View style={styles.productFirstColumn} >
            <View  style={{
                // flexDirection: 'row',
                // // flex: 1,
                // borderWidth: 1,
                // width: '100%',
            }} >
          {product.price.selling_price ? <Text style={{ ...styles.priceText, ...FONTS.h3 }} >NPR {product.price.selling_price} </Text> : null}

          {product.price.selling_price != product.price.mrp ? <Text style={{ ...styles.mrpText, ...FONTS.h5 }} >NPR {product.price.mrp} </Text> : null}
          
          </View>
        </View>
      
    </View>;

};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding / 2,
        backgroundColor: COLORS.primary,
        marginBottom: SIZES.padding*0.2,
        flexDirection: 'row',
    },
    productImage: {
        width: 200,
        height: 200,
        marginBottom: 10,
        borderRadius: 25
    },
    ratingText: {
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 5
    },
    TitleText: {
        flex: 1,
        color: COLORS.light
    },
    priceText: {
        flex: 1,
        color: COLORS.success

      },
    productName: {
        fontWeight: "600"
    },
    productFirstColumn: {
        flexDirection: "row"
    },
    ratingstyle: {
        // marginTop: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    mrpText: {
        flex: 1,
        color: COLORS.grey,
        textDecorationLine: "line-through"
    
      },
});

export default Title;
