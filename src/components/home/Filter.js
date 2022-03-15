import React,{useState,useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FilterComponent from './FilterComponent';

const Filter = () => {
    const [filter,setFilter] = useState('');

    useEffect(() => {
        setFilter('Men')
    }, []);
    if (filter == '') {
        return null;
    }
    return (
        <View style={styles.layout}>
            <FilterComponent  onPressFilter={(p)=>setFilter(p)} state ={filter}  name="Men"></FilterComponent>
            <FilterComponent  onPressFilter={(p)=>setFilter(p)} state={filter}  name="Women"></FilterComponent>
        </View>
    )

};

const styles = StyleSheet.create({
    layout:{
        flexDirection:"row",
        marginLeft:90,
    },
    filterStyle:{
        justifyContent:"space-between",
        flex:1
    }
});



export default Filter;
