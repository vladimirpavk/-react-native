import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import './App.css';

import Menu from './Containers/Menu/Menu';
import Pay from './Containers/Pay/Pay';
import Checkout from './Containers/Checkout/Checkout';

interface MyProps{}
interface MyState{
}

const Stack = createStackNavigator();

class App extends Component<MyProps, MyState>{

  constructor(props){
    super(props);
  }   

  render(){
    return(      
      <NavigationContainer>        
         <Stack.Navigator initialRouteName="Checkout">
          <Stack.Screen 
            name="Pay"            
            component={Pay}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}>                      
          </Stack.Screen>
        </Stack.Navigator> 
      </NavigationContainer>
    /*   <View style={componentStyles.view}>    
        <Menu />
        <Pay />
        <Checkout />
      </View> */
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
