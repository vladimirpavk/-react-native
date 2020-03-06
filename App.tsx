import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import './App.css';

import Menu from './Containers/Menu/Menu';
import Pay from './Containers/Pay/Pay';
import Checkout from './Containers/Checkout/Checkout';

interface MyProps{}
interface MyState{
}

class App extends Component<MyProps, MyState>{

  constructor(props){
    super(props);
  }   

  render(){
    return(
      <View style={componentStyles.view}>    
        <Menu />
        <Pay />
        <Checkout />
      </View>
    );
  } 
}

const componentStyles = StyleSheet.create({
  view:{
    flex:1,
    flexDirection: 'column'
  }
});

export default App;
