import React from 'react';
import { StyleSheet, View } from 'react-native';

import styles from './Checkout.module.css'

export default class Checkout extends React.Component{
   
    render(){
        return(
            <View style={style.stil1}>
                <label>Checkout Component</label>
                <View style={style.stil1}>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    stil1:{
        flex: 1,
        label: {
            textAlign: center
        }
    }
})