import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Header from './../components/home/Header'
import Category from '../components/home/Category'
import Filter from './../components/home/Filter'
import ProductList from '../components/home/Product/ProductList'

import useCategories from '../utils/hooks/useCategories';
import Spacer from '../components/Spacer';
const HomeScreen = ({ navigation }) => {
  const [categories, setSelectedCategory, selectedCategory] = useCategories();
  if(categories.length === 0 || categories === undefined) {
    return <Text>Loading...</Text>
  }
  if(selectedCategory === null) {
    setSelectedCategory(categories[0]);
  }
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView>
        <Category categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        {/* <Filter /> */}
        {selectedCategory && selectedCategory.children.map(category => {
          return (
            <ProductList key={category._id} 
            onProductPressed={(id) => { navigation.navigate('ProductDetail') }}
            products={category.products} 
            name={category.name}  />
          )
        })}
        {/* <ProductList onProductPressed={(id) => { navigation.navigate('ProductDetail') }} products={products} name="Sports" />
        <ProductList onProductPressed={(id) => { navigation.navigate('ProductDetail') }} products={products} name="Casual Wear" /> */}
        <Spacer />
      </ScrollView>
      {/* <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      /> */}
    </View>
  );
};


HomeScreen.navigationOptions = () => {
  return {
    header: () => false,
    tabBarVisible: () => false
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    flex: 1,
  }
});

export default HomeScreen;
