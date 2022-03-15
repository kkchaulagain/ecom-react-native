import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Review from './Review';

const Reviews = ({Rating}) => {
   
    return <View style={styles.container}>
       <Review rating={Rating}></Review>
    </View>;
};

const styles = StyleSheet.create({
    container:{
        margin:15,
        borderTopColor:"#bdc3c7",
        borderTopWidth:1
    }
});

export default Reviews;
