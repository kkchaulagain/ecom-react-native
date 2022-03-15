import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AccountOption from './AccountOption';
import { navigate } from '../../navigationRef';
const Content = () => {
    return <View style={styles.container} >
        <AccountOption OnContentPressed={()=>alert('Profile Page Loading')} icon="user" title="My Profile" />
        <AccountOption OnContentPressed={()=>navigate('AddressBook')} icon="address-book" title="Address Book" />
        <AccountOption OnContentPressed={()=>navigate('ChangePassword')} icon="key" title="Change Password" />
        <AccountOption OnContentPressed={()=>navigate('Order')} icon="bars" title="My Orders" />
        <AccountOption OnContentPressed={()=>alert('Page Loading')} icon="heart-o" title="My Wishlist" />
        <AccountOption OnContentPressed={()=>alert('Page Loading')} icon="cog" title="Settings" />
     
    </View>;
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        borderRadius:10,
        justifyContent: "center",
        backgroundColor: "#fff",
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    }
});

export default Content;
