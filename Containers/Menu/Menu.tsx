import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import './Menu.css';

export default class Menu extends Component{
    constructor(props){
        super(props);
    }   

    render(){
        return(
            <View style={viewStyle.stil1}>
                <ul className="menu">
                    <li>Pay</li>
                    <li>Checkout</li>
                </ul>                
            </View>
        )
    }
}

const viewStyle = StyleSheet.create({
    stil1:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'lightblue'
    }
});
