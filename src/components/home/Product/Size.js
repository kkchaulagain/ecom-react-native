import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { COLORS } from '../../../../constants';
import Spacer from '../../Spacer';
import Sizer from './Sizer';

const Size = ({ sizes }) => {
    const [size, setSize] = useState('');
    useEffect(() => {
        setSize('20')
    }, []);
    if (!size) {
        return null;
    }
    return <View style={styles.container}>
        <View style={styles.firstRow}>
            <Text style={styles.size}>Size</Text>
            <View style={styles.firstRow}>
                <Text style={styles.selected}>Nepal</Text>
            </View>
        </View>
        <View style={styles.sizeHolder}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={sizes}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return <Sizer onSizeChange={(s) => setSize(s)} active={size} size={item.value} />

                }}
            />

        </View>
    </View>;
};

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 15,
        marginBottom: 10,
        backgroundColor: "#ecf0f1",
        borderRadius: 20,
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },
    sizeHolder: {
        flexDirection: "row"
    },
    margin: {
        marginHorizontal: 5
    },
    selected: {
        marginHorizontal: 5,
        color: COLORS.primary,
        fontWeight: "bold",
        letterSpacing:0.8
    },
    firstRow: {
        flexDirection: "row",
        fontSize: 16,
        marginHorizontal: 10,
        marginVertical: 5

    },
    size: {
        flex: 1,
        fontWeight: "700",
        letterSpacing:1.1

    }

});

export default Size;
