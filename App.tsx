import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


interface MyProps{}
interface MyState{
  name: string,
  anyText: string
}

class App extends Component<MyProps, MyState>{

  constructor(props){
    super(props);
    this.state={
      name : '',
      anyText: ''
    };
  }   

  textChanged = (text, event)=>{
    //console.log(text, event);
    this.setState({
      anyText: text
    })
  }

  render(){
    return(
      <View style={{flex:1, flexDirection: 'column'}}>
        <View style={styles.stil1}>
          <TextInput
            style={{flex:1}}
            placeholder="Type any text in da box"
            onChangeText={(text)=>this.textChanged(text, event)}
            value={this.state.anyText}
          ></TextInput>
        </View>
        <View style={styles.stil2}></View>
        <View style={styles.stil3}></View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  stil1: {
    flex:1,
    backgroundColor: 'powderblue'
  },
  stil2: {
    flex:2,
    backgroundColor: 'skyblue'
  },
  stil3: {
    flex: 3,
    backgroundColor: 'steelblue'
  }
});

export default App;
