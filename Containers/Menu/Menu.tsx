import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Menu extends Component{
    constructor(props){
        super(props);
    }   

    render(){              
        return(
            <View style={viewStyle.view}>
                <ul style={styles.menu}>
                    <li style={styles.listItem}>Pay</li>
                    <li style={styles.listItem}>Checkout</li>
                </ul>                
            </View>
        )
    }
}

const styles = ({  
    menu:{
        listStyleType: 'none',
        margin: 0,
        padding: 0
    },
    listItem: {
        display: 'inline',
        padding: 5+'px',
        fontFamily: 'Oswald'
    }
});

const viewStyle = StyleSheet.create({
    view:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

