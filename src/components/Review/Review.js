import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Rating from '../home/Product/Rating';

const Review = ({ rating }) => {

    return (<View style={styles.container}>
        <View style={styles.reviewheads}>
            <Image style={styles.avatar} source={rating.image} />
            <View style={styles.nameHolder}>
                <Text style={styles.name}>{rating.name}</Text>
                <View style={styles.ratingstyle} >
                    <Rating active={rating.rating >= 1 ? true : false} />
                    <Rating active={rating.rating >= 2 ? true : false} />
                    <Rating active={rating.rating >= 3 ? true : false} />
                    <Rating active={rating.rating >= 4 ? true : false} />
                    <Rating active={rating.rating >= 5 ? true : false} />
                    {/* <Text style={styles.ratingText}>{rating.rating_count}</Text> */}
                </View>
            </View>
        </View>
        <View style={styles.description}>
            <Text style={styles.descriptiontext}>{rating.description}</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderBottomColor:'#95a5a6'
    },
    descriptiontext: {
        marginTop:10,
        letterSpacing:0.8
    },
    reviewheads: {
        flexDirection: "row"
    },
    name: {
        fontSize: 10,
        marginTop: 7,
        fontWeight: "bold"
    },
    nameHolder: {
    },
    ratingstyle: {
        flexDirection: "row",
        marginTop: 3
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 40,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 5,
        marginRight: 15
    }
});

export default Review;
