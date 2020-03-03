import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


interface MyProps{}
interface MyState{
  name: string
}

class App extends Component<MyProps, MyState>{

  constructor(props){
    super(props);
    this.state={
      name : ''
    };
  }   

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.tsx to start on your app!</Text>
        <TextInput
          style={styles.text}
          onChangeText={(text)=>this.setState({name: text})}       
          value={this.state.name}   
        ></TextInput>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    border: '1px solid red',
    backgroundColor: 'green'
  }
});

export default App;
