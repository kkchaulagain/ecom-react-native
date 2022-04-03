import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Rating from '../home/Product/Rating';
import { ProgressBar } from 'react-native-paper';
import Reviews from './../Review/Reviews'
import { FlatList } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES } from '../../../constants';
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
        marginTop: SIZES.margin,
        backgroundColor: COLORS.support5_08,
        shadowColor: COLORS.grey,
        shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
    },
    contentHolder: {
        margin: SIZES.margin,
        borderBottomColor: COLORS.grey,
    },
    ratingsubtext: {
        // fontSize: 15,
        // marginLeft: 5,
        // marginTop: 2
    },
    reviewbars: {
        flexDirection: "row",
        marginVertical: SIZES.margin*0.1,
    },
    reviewbar: {
        // flex:1,
        width: SIZES.width*0.7,
        marginTop: SIZES.margin*0.1,
        justifyContent: 'center'

    },
    reviewbartext: {
        width: SIZES.width*0.2
    },
    mainText: {
        fontSize: FONTS.body4.fontSize,
        fontFamily: FONTS.body4.fontFamily,
        fontWeight: "bold",
        letterSpacing: 1.2,
        textAlign: "center"
    },
    ratingContainer: {
        marginVertical: SIZES.margin*0.8,
    },
    ratingstyle: {
        marginTop: SIZES.margin*0.8,
        flexDirection: "row",
        justifyContent: "center",
    },
    ratingText: {
        textAlign: "center",
        marginTop: SIZES.margin*0.8,
    },
    mainRatingText: {
        fontSize: FONTS.h2.fontSize,
        fontFamily: FONTS.h2.fontFamily,
        fontWeight: "bold",
        letterSpacing: 1.1,
        textAlign: "center"
    }
});

export default Review;
