import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Timeline from 'react-native-timeline-flatlist'

const Tracker = ({data}) => {
    
    return (
        <View style={styles.container}>
            <Timeline timeContainerStyle={styles.timelinestyles}
                circleSize={20}
                circleColor='#27ae60'
                lineColor='#27ae60'
                timeStyle={styles.timestyles}
                data={data}
                options={{
                    style: { margin: 15 }
                }}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop:15,
        backgroundColor: '#fff',
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    timelinestyles: {

    },
    timestyles: {
        textAlign: 'center',
        backgroundColor: '#27ae60',
        color: 'white',
        padding: 5,
        borderRadius: 13
    }
});

export default Tracker;
