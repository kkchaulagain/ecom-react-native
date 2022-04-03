import React from 'react';
import { View, FlatList, StyleSheet,Text,Image } from 'react-native';
// import {  } from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons'
import Product from './products';
import { COLORS, icons } from '../../../../constants';

const ProductList = ({ name, products, onProductPressed }) => {

  return (
    <>
      <View style={styles.listtitle}>
        <Text style={styles.listtitletext} >{name}</Text>
        <>
        {/* <Text style={styles.iconstyle}></Text> */}
        <Image 
        style={styles.iconstyle}
        source ={icons.arrow_down_fill}
        />
        {/* <FontAwesome  style={styles.iconstyle} name="caret-right" /> */}
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
                onProductPress={(id) => onProductPressed(id)}
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
    fontSize:20,
    fontWeight:"bold",
    textTransform: 'capitalize',
    flex:1
  },
  iconstyle:{
    tintColor:COLORS.primary,
    width:20,
    height:20
  }
});

export default ProductList;
