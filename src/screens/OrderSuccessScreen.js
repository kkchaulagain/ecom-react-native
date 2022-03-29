import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { FontAwesome } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';
import OrderAction from '../components/checkout/OrderAction';
import { COLORS } from '../../constants';
const OrderSuccessScreen = ({navigation}) => {

    return (
        <ScrollView>
            <SafeAreaView forceInset={{ top: 'always' }}>
                <View style={styles.container}>
                    <FontAwesome style={styles.iconStyle} name="check-circle" />
                    <Text style={styles.title}>Order Success</Text>

                    <OrderAction onPurchase={() => { navigation.navigate('Checkout')}} />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginTop: 200,
        flex: 1,
        // borderWidth: 1
    },
    subtext:{
        fontSize:14,
        textAlign:"center"
    },
    title:{
        textAlign:"center",
        fontSize:26,
        fontWeight:"600",
        letterSpacing:1.2,
        color : COLORS.primary
    },
    iconStyle: {
        fontSize: 60,
        textAlign: "center",
        color: COLORS.primary
    }
});
OrderSuccessScreen.navigationOptions = () => {
    return {
        header: () => false,
        tabBarVisible: () => false
    };
};

export default OrderSuccessScreen;
