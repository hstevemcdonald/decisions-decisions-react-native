import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import list from "./data/list"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true
    }
  }

  decide() {
    this.setState(previousState => (
      { start: false, ...previousState }
    ))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instruction}>Press the button to decide what to do:</Text>
        <Button title="Make a Decision" onPress="decide"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  instruction: {
    fontSize: 20,
    margin: 15
  }
});
