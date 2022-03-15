import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
const AccountOption = ({ icon, title, OnContentPressed }) => {
    return (
        <TouchableOpacity
            onPress={OnContentPressed}
        >
            <View style={styles.container}>
                <Text style={styles.iconholder}>
                    <FontAwesome style={styles.icon} name={icon} />
                </Text>
                <View style={styles.mainOptions}>
                    <Text style={styles.mainOptionsText}>
                        {title}
                    </Text>
                </View>
                <View style={styles.iconholder}>
                    {/* <Text>11</Text> */}
                    <FontAwesome style={styles.icon} name="caret-right" />
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icon: {
        fontSize: 18,
        textAlign: 'center'
    },
    iconholder: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    mainOptions: {
        flex: 7
    },
    mainOptionsText: {
        fontSize: 18
    }
});

export default AccountOption;
