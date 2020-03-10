import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

interface MyProps{
    navigation: StackNavigationProp<RootStackParamList, 'Checkout'>,
    route: RouteProp<RootStackParamList, 'Checkout'>
};

export default class Checkout extends React.Component<MyProps>{

   constructor(props){
    super(props);
    console.log('Checkout', props);
   }

   buttonClicked = (event)=>{
    //console.log(event);
    this.props.navigation.navigate('Pay', {
        name: 'Vladimir',
        lastname: 'Pavkovic',
        addr: {
            street: '3.oktobar',
            num: 156
        }
    });
   }

    render(){
        return(
            <View style={viewStyle.view}>
                <label style={styles.title}>Checkout Component</label>
                <View style={viewStyle.view}>
                <Button 
                    title="Go to Pay page"
                    onPress={()=>{this.buttonClicked(event)}}/>
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