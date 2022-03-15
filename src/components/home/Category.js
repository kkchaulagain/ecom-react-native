import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, Image,FlatList } from 'react-native';
import SingleCategory from './SingleCategory';

const Product = () => {
    const [product,setProduct] = useState('');
    const products = [
        {
            id: 1,
            name: "Bags",
            image: require('./../../../assets/bag.png'),
            active:true,
        },
        {
            id: 2,
            name: "Shoes",
            image: require('./../../../assets/shoes.png'),
            active:false
        },
        {
            id: 3,
            name: "Watches",
            image: require('./../../../assets/w.png'),
            active: false,
        },
        {
            id: 4,
            name: "Glasses",
            image: require('./../../../assets/b.png'),
            active: false,
        },
        {
            id: 5,
            name: "Tshirt",
            image: require('./../../../assets/b.png'),
            active: false,
        },
    ];

    
    useEffect(() => {
        setProduct('Watches')
    }, []);
    if (product === '') {
        return null;
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={products}
                keyExtractor={result => result.id + 'product'}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <SingleCategory   onPressProduct={(p)=>setProduct(p)}
                         name={item.name}
                          state={product}
                           image={item.image} />
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
