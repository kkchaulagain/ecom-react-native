import React from 'react';
import { View,Text, StyleSheet , Image} from 'react-native';

const Header = ( ) => {
    return (
        <View style={styles.container}>
            <Text style={styles.H1}>Explore</Text>
            <Image style={styles.avatar} source={require('./../../../assets/f.jpg')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:40,
        flexDirection:'row'
    },
    H1:{
        fontSize:36,
        margin:15,
        fontWeight:'bold',
        flex:1
    },
    avatar:{
        width:60,
        height:60,
        borderRadius:40,
        justifyContent:'center',
        borderWidth:2,
        borderColor:'black',
        marginTop:5,
        marginRight:15
    }
});

export default Header;
