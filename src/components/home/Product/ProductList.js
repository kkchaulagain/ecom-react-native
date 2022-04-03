import React from 'react';
import { View, FlatList, StyleSheet,Text,Image } from 'react-native';
// import {  } from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons'
import Product from './products';
import { COLORS, icons,FONTS } from '../../../../constants';

const ProductList = ({ name, products, onProductPressed }) => {

  return (
    <>
      <View style={styles.listtitle}>
        <Text style={{...styles.listtitletext,...FONTS.h2}} >{name}</Text>
        <>
       
        <Image 
        style={styles.iconstyle}
        source ={icons.arrow_down_fill}
        />
        </>
      </View>
      <View style={styles.container} >
        <FlatList
          horizontal
          data={products}
          keyExtractor={result => result._id + 'product'}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Product
                onProductPress={(product) => onProductPressed(product)}
                product={item}
              />
            )
          }}
        />
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  listtitle: {
    marginHorizontal: 15,
    marginVertical:20,
    flexDirection: 'row'
  },
  listtitletext:{
    textTransform: 'capitalize',
    color: COLORS.primary,
    flex:1
  },
  iconstyle:{
    tintColor:COLORS.primary,
    width:20,
    height:20
  }
});

export default ProductList;
