import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

const Subheader = () => {
    return <View style={styles.container} >
        <View style={styles.avatarHolder}>
            <View >
                <Image style={styles.avatar} source={require('./../../../assets/f.jpg')} />
       
            </View>

        </View>
        <Text style={styles.name}>Kiran Chaulagain</Text>
        <Text style={styles.email}>kkchaulagain@gmail.com</Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        margin: 15,
        borderRadius:30,
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    avatarHolder: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    name:{
        textAlign:"center",
        fontSize:18,
        marginTop:5,
        fontWeight:"600",
        color:"#fff"
    },
    email:{
        textAlign:"center",
        fontSize:14,
        fontWeight:"600",
        color:"#fff"
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 5,
        marginRight: 15
    }
});

export default Subheader;
