import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import _ from 'lodash';
import list from './list.json';
import HTML from 'react-native-render-html';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.list = list;
    this.state = {
      listItem: null,
      choosing: false
    }
    this._onPressDecideButton = this._onPressDecideButton.bind(this);
  }

  _onPressDecideButton(e) {
    e.preventDefault();

    let _this = this;
    let timeout = null;
    let increment = 1.0000000000001;
    this.setState( previousState => (
      { 
        ...previousState, 
        choosing: true,
      }
    ))
    
    function spin(time = 0) {
      if (time < 50) {
        increment **= 1.25;
        timeout = setTimeout(() => {
          _this.setState(previousState => ({
            ...previousState,
            listItem: _this.list[parseInt(Math.random() * _this.list.length - 1)]
          }));
          time += increment;
          console.log(time);
          spin(time);
        }, time);
        return;
      }
      _this.setState( previousState => (
        { 
          ...previousState, 
          choosing: false
        }
      ))
      clearTimeout(timeout);
    }

    spin();
  }

  render() {
    const { listItem, choosing } = this.state;
    let content;

    if (!_.isEmpty(listItem)) {
        const parts = listItem.split(' - ');
        content = (parts.length > 1) ? '<p><b>' + parts[0] + '</b><br>' + parts[1] + '</p>' : '<p><b>' + parts[0] + '</b></p>'
    }
  
    return (
      <View style={styles.container}>
            {_.isEmpty(listItem) ? <Text style={styles.instruction}>Press the button to decide what to do:</Text> : choosing ? <Text style={styles.instruction}>Deciding...</Text> : <Text style={styles.instruction}>Do this:</Text>}
            {_.isEmpty(listItem) ? <Button title="Make a Decision" onPress={this._onPressDecideButton}></Button> : <HTML tagsStyles={{p: styles.dothis}} html={content} />}
            {(!_.isEmpty(listItem) && !choosing) ? <Button title="Pick Something Else" onPress={this._onPressDecideButton}></Button> : null}
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
  },
  dothis: {
    fontSize: 22,
    marginTop: 15,
    height: 85,
    marginBottom: 25,
    color: '#008844',
    textAlign: 'center'
  }
});
