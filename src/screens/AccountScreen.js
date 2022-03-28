import React, { useContext } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
// import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Content from '../components/account/Content';
import Subheader from '../components/account/Subheader';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import Header from './../components/cart/Header'

const AccountScreen = () => {
  // const { signout } = useContext(AuthContext);
  const signout = () => {
    console.log('signout');
  };

  return (
    <View style={styles.container}>

      <Header name="Account" />
      <ScrollView>
      <Subheader />
      <Content />
      <Spacer>
        {/* <Button title="Sign Out" onPress={signout} /> */}
        <Pressable
        buttonStyle={styles.logoutbuttonStyle}
          title="Sign Out"
          onPress={signout}
        />
      </Spacer>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    flex: 1
  },
  logoutbuttonStyle:{
    backgroundColor:"#e74c3c",
    borderRadius:10
  }
});

AccountScreen.navigationOptions = () => {
  return {
      header: () => false,
      tabBarVisible: () => false
  };
};

export default AccountScreen;
