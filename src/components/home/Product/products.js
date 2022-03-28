import React from 'react';
import { View, StyleSheet, Text,Image,TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../constants';
import Rating from './Rating';

const ProductList = ({ product,onProductPress }) => {

  return (
    <TouchableOpacity
      onPress={()=>onProductPress(product.id)}
    >
    <View style={styles.container}>
      <Image style={styles.productImage} source={product.image} />
      {/* <Spacer /> */}
      <View style={styles.productFirstColumn} >
        <Text style={styles.priceText} >{product.currency} {product.price} </Text>
        
      <View style={styles.ratingstyle} ></View>
        <Rating active={product.rating>=1?true:false} /> 
        <Rating active={product.rating>=2?true:false} /> 
        <Rating active={product.rating>=3?true:false} /> 
        <Rating active={product.rating>=4?true:false} /> 
        <Rating active={product.rating>=5?true:false} /> 
      </View>
      <Text style={styles.productName} >{product.name} </Text>
      
    </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container:{
    marginHorizontal:15,
    backgroundColor:"#fafafa"
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom:10,
    borderRadius:25
  },
  priceText: {
    fontSize: 26,
    fontWeight: 'bold',
    flex:1,
    color:COLORS.primary80
  },
  productName:{
    fontSize:18,
    fontWeight:"600",
    letterSpacing:1.5
  },
  productFirstColumn:{
    flexDirection:"row"
  },
  ratingstyle:{
    flexDirection:"row",
    justifyContent:"flex-end",
  },

});

export default ProductList;
