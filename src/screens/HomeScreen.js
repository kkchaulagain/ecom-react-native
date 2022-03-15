import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Header from './../components/home/Header'
import Category from '../components/home/Category'
import Filter from './../components/home/Filter'
import ProductList from '../components/home/Product/ProductList'
import Spacer from '../components/Spacer';
const  HomeScreen = ({ navigation }) => {
  const products = [
    {
      id: 1,
      name: "Reebok Red Run",
      price: "7000",
      image: require('./../../assets/b.jpg'),
      currency: "Rs",
      rating: 4
    },
    {
      id: 2,
      name: "Nike Red Run",
      price: "7500",
      image: require('./../../assets/nike.png'),
      currency: "Rs",
      rating: 4
    }
  ]
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView>
        <Category />
        <Filter />
        <ProductList onProductPressed={(id) => { navigation.navigate('ProductDetail')}} products={products} name="Sports" />
        <ProductList onProductPressed={(id) => { navigation.navigate('ProductDetail')}} products={products} name="Casual Wear" />
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
    tabBarVisible:()=>false
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    flex:1,
  }
});

export default HomeScreen;
