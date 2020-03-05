import React from 'react';
import { StyleSheet, View } from 'react-native';

import './Pay.css';

export default class Pay extends React.Component{
    constructor(props){
        super(props);        
    }

    render(){
        return(
            <View style={style.stil1}>
                <label>Pay Component</label>
                <View style={style.stil1}>
                </View>
            </View>           
        )
    }
}

const style = StyleSheet.create({
    stil1:{
        flex: 1
    }
})