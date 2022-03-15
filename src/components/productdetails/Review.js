import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Rating from '../home/Product/Rating';
import { ProgressBar } from 'react-native-paper';
import Reviews from './../Review/Reviews'
import { FlatList } from 'react-native-gesture-handler';
const Review = ({ product }) => {
    return <View style={styles.container}>
        <View style={styles.contentHolder}>

            <View>
                <Text style={styles.mainText} >Reviews</Text>
            </View>
            <View style={styles.ratingContainer}>
                <Text style={styles.mainRatingText} >4.0</Text>

                <View style={styles.ratingstyle} >

                    <Rating active={product.rating >= 1 ? true : false} />
                    <Rating active={product.rating >= 2 ? true : false} />
                    <Rating active={product.rating >= 3 ? true : false} />
                    <Rating active={product.rating >= 4 ? true : false} />
                    <Rating active={product.rating >= 5 ? true : false} />
                </View>
                <Text style={styles.ratingText}>based on {product.rating_count} reviews</Text>

                {/* <Text style={styles.mainRatingText} >4.0</Text> */}
            </View>
            <View>
                <View style={styles.reviewbars} >
                    <Text style={styles.reviewbartext}>Excellent</Text>
                    <ProgressBar style={styles.reviewbar} progress={product.reviews.Excellent} color="#27ae60" />
                    {/* <Text style={styles.ratingsubtext}>based on 20 reviews</Text> */}
                </View>
                <View style={styles.reviewbars} >
                    <Text style={styles.reviewbartext}>Good</Text>
                    <ProgressBar style={styles.reviewbar} progress={product.reviews.Good} color="#2ecc71" />
                    {/* <Text style={styles.ratingsubtext}>based on 20 reviews</Text> */}
                </View>
                <View style={styles.reviewbars} >
                    <Text style={styles.reviewbartext}>Average</Text>
                    <ProgressBar style={styles.reviewbar} progress={product.reviews.Average} color="#f1c40f" />
                    {/* <Text style={styles.ratingsubtext}>based on 20 reviews</Text> */}
                </View>
                <View style={styles.reviewbars} >
                    <Text style={styles.reviewbartext}>B. Average</Text>
                    <ProgressBar style={styles.reviewbar} progress={product.reviews.BelowAverage} color="#e67e22" />
                    {/* <Text style={styles.ratingsubtext}>based on 20 reviews</Text> */}
                </View>
                <View style={styles.reviewbars} >
                    <Text style={styles.reviewbartext}>Poor</Text>
                    <ProgressBar style={styles.reviewbar} progress={product.reviews.Poor} color="#c0392b" />
                    {/* <Text style={styles.ratingsubtext}>based on 20 reviews</Text> */}
                </View>

            </View>

        </View>
        <FlatList

            data={product.reviews.reviews}
            keyExtractor={result => result.id +'o'}
            renderItem={({ item }) => {
                return <Reviews Rating={item} />

            }}
        />
    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        backgroundColor: "#ecf0f1",
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    contentHolder: {
        margin: 15,
        borderBottomColor: "black",
    },
    ratingsubtext: {
        fontSize: 10,
        marginLeft: 5,
        marginTop: 2
    },
    reviewbars: {
        flexDirection: "row",
        marginVertical: 2
    },
    reviewbar: {
        // flex:1,
        width: 180,
        marginTop: 6,
        justifyContent: 'center'

    },
    reviewbartext: {
        width: 80
    },
    mainText: {
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 1.1,
        textAlign: "center"
    },
    ratingContainer: {
        marginVertical: 20,
    },
    ratingstyle: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
    },
    ratingText: {
        textAlign: "center",
        marginTop: 5
    },
    mainRatingText: {
        fontSize: 32,
        fontWeight: "bold",
        letterSpacing: 1.1,
        textAlign: "center"
    }
});

export default Review;
