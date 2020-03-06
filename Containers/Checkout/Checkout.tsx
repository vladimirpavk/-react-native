import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Checkout extends React.Component{
   
    render(){
        return(
            <View style={viewStyle.view}>
                <label style={styles.title}>Checkout Component</label>
                <View style={viewStyle.view}>
                </View>
            </View>
        )
    }
}

const viewStyle = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'red'
    }
});

const styles = {
    title:{        
        padding: 5+'px',
        borderWidth: 1+'px',
        borderStyle: 'solid',
        borderColor: 'green',
        fontFamily: 'Oswald',
        backgroundColor: 'white'
    }
}