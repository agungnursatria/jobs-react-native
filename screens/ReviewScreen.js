import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class ReviewScreen extends Component {
  static navigationOptions = {
    title: 'Review Jobs',
    header: ({ navigate }) => {
      return{
        right: <Button title="Settings" onPress={() => navigate('settings')} />
      };
    }
  }

  render() {
    return (
      <View>
          <Text>ReviewScreen</Text>
          <Text>ReviewScreen</Text>
          <Text>ReviewScreen</Text>
          <Text>ReviewScreen</Text>
          <Text>ReviewScreen</Text>
          <Text>ReviewScreen</Text>
      </View>
    );
  }
}