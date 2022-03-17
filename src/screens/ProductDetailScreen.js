import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Size from '../components/home/Product/Size';
import Action from '../components/productdetails/Action';
import Description from '../components/productdetails/Description';
import Review from '../components/productdetails/Review';
import Title from '../components/productdetails/Title';
import Banner from './../components/productdetails/Banner'

const ProductDetailScreen = () => {
    const product = {
        id: 1,
        name: "Reebok Red Run",
        price: "7000",
        sizes: [
            {
                id: "1",
                value: "16"
            },
            {
                id: "2",
                value: "18"
            },
            {
                id: "3",
                value: "20"
            },
            {
                id: "4",
                value: "22"
            },
            {
                id: "5",
                value: "24"
            },
        ],
        image: require('./../../assets/nike.png'),
        currency: "Rs",
        rating: 4,
        rating_count: '3,762',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis nulla vestibulum leo imperdiet pellentesque. Aliquam a lacinia diam. Suspendisse dictum eu enim ac tempus. Fusce ullamcorper consequat lacus, in lobortis nisi viverra aliquet. Nullam dignissim mauris eget euismod sodales. Maecenas sollicitudin urna vel magna vestibulum, eget fringilla elit rutrum. Etiam maximus, eros quis elementum rhoncus, ipsum metus luctus arcu, eu auctor enim purus at elit. Maecenas laoreet aliquam faucibus. Curabitur egestas ex ut tortor tincidunt, aliquet fringilla magna porta. Sed in massa sapien. Nulla rhoncus, nibh quis accumsan euismod, lorem ex vehicula felis, at dapibus purus sem non nulla. In interdum congue tortor. Integer sagittis tristique ante. Nunc venenatis rutrum augue.",
        reviews: {
            Excellent: 0.6,
            Good: 0.8,
            Average: 0.6,
            BelowAverage: 0.4,
            Poor: 0.2,
            reviews: [
                {
                    id:1,
                    name: "Kiran Chaulagain",
                    rating: 4,
                    description: "Good at simply being a virtual device on your physical device, but opening the developer menu by shaking the device was a terrible idea. There is no way to stop remote debugging.",
                    image: require('./../../assets/f.jpg')
                },
                {
                    id:2,
                    name: "Puja Khatiwada",
                    rating: 5,
                    description: "It is a great coding app no crashes nothing from my side it can be yours because my son do minimal projects it is superb.",
                    image: require('./../../assets/puja.jpg')
                },
                
            ]
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <Banner product={product} />

                <Title product={product} />

                <Size sizes={product.sizes} />
                <Action />
                <Description product={product} />
                <Review product={product} />

            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        flex: 1,
    }
});

ProductDetailScreen.navigationOptions = () => {
    return {
        header: () => false,
        tabBarVisible: () => false
    };
};

export default ProductDetailScreen;
