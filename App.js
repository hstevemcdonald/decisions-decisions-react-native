import React from 'react';
import _ from 'lodash';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './components/home'
import list from './list.json';

class App extends React.Component {
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
    return (
      <Home
      
        list={this.list}
        listItem={this.state.listItem}
        choosing={this.state.choosing}
      >
      </Home>
    )
  }    
}

const AppNavigator = createStackNavigator({
  Home: { screen: App }
});

//,
Lists: { screen: ListsScreen },

export default createAppContainer(AppNavigator)
