import React from 'react';
import { View, FlatList, StyleSheet,Text } from 'react-native';
// import {  } from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons'
import Product from './products';

const ProductList = ({ name, products, onProductPressed }) => {

  return (
    <>
      <View style={styles.listtitle}>
        <Text style={styles.listtitletext} >{name}</Text>
        <>
        {/* <Text style={styles.iconstyle}></Text> */}
        <FontAwesome  style={styles.iconstyle} name="caret-right" />
        </>
      </View>
      <View style={styles.container} >
        <FlatList
          horizontal
          data={products}
          keyExtractor={result => result.id + 'product'}
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
    flex:1
  },
  iconstyle:{
    fontSize:20,
    marginHorizontal:2,
    color:'#2ecc71'
  }
});

export default ProductList;
