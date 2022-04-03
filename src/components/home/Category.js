import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { urilize } from '../../utils/helpers/common';
import SingleCategory from './SingleCategory';

const Product = ({ categories, setSelectedCategory, selectedCategory }) => {
    const [product, setProduct] = useState('');
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={categories}
                keyExtractor={result => result._id + 'product'}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <SingleCategory setSelectedCategory={setSelectedCategory}
                            name={item.name}
                            category={item}
                            selectedCategory={selectedCategory} />
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row'
    }
});

export default Product;
