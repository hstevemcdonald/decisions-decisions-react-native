import React from 'react';
const _ = require('lodash');
import { Text, View, Button } from 'react-native';

// const navigation = require('../common/nav')
const Home = require('./Home');
const styles = require('../common/styles');

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)

        this.content = '';
        const { listItem, choosing } = props;
        
        if (!_.isEmpty(listItem)) {
            const parts = listItem.split(' - ');
            this.content = (parts.length > 1) ? '<p><b>' + parts[0] + '</b><br>' + parts[1] + '</p>' : '<p><b>' + parts[0] + '</b></p>'
        }
    }
    
    static navigationOptions = {
      title: 'Home',
    };

    render(props) {
      const { navigate } = navigation;
      return (
        <Home
            styles={styles} 
            >
            <Button
                title="Lists"
                onPress={() =>
                    navigate('Lists', { name: 'Lists' })
            }
            />
        </Home>
      );
    }   
}
