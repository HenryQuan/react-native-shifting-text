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
    // Label 1
    fade1: new Animated.Value(1),
    top1: new Animated.Value(0),
    // Label 2
    fade2: new Animated.Value(0),
    top2: new Animated.Value(20),
  };

  render() {
    Animated.timing(
      // Animate value over time
      this.state.fade1, // The value to drive
      {
        toValue: 0, // Animate to final value of 1
      },
    ).start();

    Animated.timing(
      // Animate value over time
      this.state.top1, // The value to drive
      {
        toValue: -20, // Animate to final value of 1
      },
    ).start();

    Animated.timing(
      // Animate value over time
      this.state.fade2, // The value to drive
      {
        toValue: 1, // Animate to final value of 1
      },
    ).start();

    Animated.timing(
      // Animate value over time
      this.state.top2, // The value to drive
      {
        toValue: 0, // Animate to final value of 1
      },
    ).start();

    const {center, t1, t2, shift} = styles;
    const {fade1, top1, fade2, top2} = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={shift}>
          <Text>WoWs Info</Text>
          <View style={center}>
            <Animated.Text style={[t1, {top: top1, opacity: fade1}]}>
              Hello
            </Animated.Text>
            <Animated.Text style={[t2, {top: top2, opacity: fade2}]}>
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
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  t1: {
    position: 'absolute',
    left: 4,
  },
  t2: {
    position: 'absolute',
    left: 4,
  },
});
