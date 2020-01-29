/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

export default class App extends Component {
  state = {
    fade1: new Animated.Value(1),
    fade2: new Animated.Value(1),
  };

  render() {
    Animated.timing(
      // Animate value over time
      this.state.fade1, // The value to drive
      {
        toValue: 0, // Animate to final value of 1
      },
    ).start();

    const {center, t1, t2, shift} = styles;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={shift}>
          <Text>WoWs Info</Text>
          <View style={center}>
            <Animated.Text style={[t1, {opacity: this.state.fade1}]}>
              Hello
            </Animated.Text>
            <Animated.Text style={[t2, {opacity: this.state.fade2}]}>
              World
            </Animated.Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  shift: {
    flex: 1,
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  t1: {
    position: 'absolute',
    top: 0,
    left: 4,
  },
  t2: {
    position: 'absolute',
    left: 4, 
    top: 20,
  },
});
