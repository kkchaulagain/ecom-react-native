import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../../constants';
import { urilize } from '../../../utils/helpers/common';
import Rating from './Rating';

const ProductList = ({ product, onProductPress }) => {
  console.log(product.images[0])
  const imageUrl = urilize(product.images[0].url);
  console.log(imageUrl)
  return (
    <TouchableOpacity
      onPress={() => onProductPress(product._id)}
    >
      <View style={styles.container}>
        <Image style={styles.productImage} source={urilize(product.images[0].url)} />
        {/* <Spacer /> */}

        <Text style={{ ...FONTS.body4, ...styles.productName }} >{product.name} </Text>
        <View style={styles.productFirstColumn} >
          <View style={{flex:1}} >
          {product.price.selling_price ? <Text style={{ ...styles.priceText, ...FONTS.h3 }} >NPR {product.price.selling_price} </Text> : null}

          {product.price.selling_price != product.price.mrp ? <Text style={{ ...styles.mrpText, ...FONTS.h5 }} >NPR {product.price.mrp} </Text> : null}
          
          </View>
       
          <View style={styles.ratingstyle} ></View>
          <Rating active={product.rating >= 1 ? true : false} />
          <Rating active={product.rating >= 2 ? true : false} />
          <Rating active={product.rating >= 3 ? true : false} />
          <Rating active={product.rating >= 4 ? true : false} />
          <Rating active={product.rating >= 5 ? true : false} />
        </View>

      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    backgroundColor: COLORS.light,
    // pad
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 25
  },
  priceText: {
    flex: 1,
    color: COLORS.primary

  },
  mrpText: {
    flex: 1,
    color: COLORS.success,
    textDecorationLine: "line-through"

  },
  productName: {
    width: 200,
  },
  productFirstColumn: {
    flexDirection: "row"
  },
  ratingstyle: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

});

export default ProductList;
