import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import './App.css';

import Menu from './Containers/Menu/Menu';
import Pay from './Containers/Pay/Pay';
import Checkout from './Containers/Checkout/Checkout';

import Logo from './Components/Logo/Logo';

interface MyProps{}
interface MyState{
}

export type RootStackParamList = {
  Pay: {
    name: string,
    lastname: string,
    addr: {
      street: string,
      num: number
    }
  },
  Checkout: {
    title: string
  }
}

const Stack = createStackNavigator<RootStackParamList>();

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
            component={Pay}/>
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{
             headerTitle: (props)=><Logo {...props}/>
            }}/>                              
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
