import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Pay extends React.Component{
    constructor(props){
        super(props);       
        console.log(JSON.stringify(props.route.params));
    }

    render(){
        return(
            <View style={viewStyle.view}>
                <label style={styles.title}>Pay Component</label>
                <View style={viewStyle.view}>
                </View>
            </View>           
        )
    }
}

const viewStyle = StyleSheet.create({
    view:{
        flex: 1,
        backgroundColor: 'green'
    }
})

const styles = {
    title: {
        padding: 5+'px',
        fontFamily: 'Oswald',
        borderWidth: 1+'px',
        borderStyle: 'solid',
        borderColor: 'red',
        backgroundColor: 'white'
    }
}