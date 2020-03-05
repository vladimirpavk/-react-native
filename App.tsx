import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

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
      <View style={{flex:1, flexDirection: 'column'}}>    
        <Menu />    
        {/* <View style={styles.stil1}></View> */}       
        <Pay />
        <Checkout />
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  stil1: {
    flex:1,
    backgroundColor: 'skyblue'
  }
});

export default App;
