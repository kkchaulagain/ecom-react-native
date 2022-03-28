import React from 'react';
import {  StyleSheet } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import { COLORS } from '../../../../constants';
const Rating = ({active}) => {

  return (
    <FontAwesome style={active?styles.staractiveiconStyle:styles.starinactiveiconStyle} name="star" />
  )
};

const styles = StyleSheet.create({
  staractiveiconStyle:{
    fontSize:14,
    marginHorizontal:2,
    alignSelf:"center",
    color:COLORS.primary80
  },
  starinactiveiconStyle:{
    fontSize:14,
    marginHorizontal:2,
    alignSelf:"center",
    color:"#ddd"
  }
});

export default Rating;
