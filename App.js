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
  constructor(props) {
    super(props);
    this.state = {
      // Label 1
      fade1: new Animated.Value(1),
      top1: new Animated.Value(0),
      text1: 'Hello',
      // Label 2
      fade2: new Animated.Value(0),
      top2: new Animated.Value(20),
      text2: 'World',
    };
  }

  render() {
    this.animate();
    
    const {center, t1, t2, shift} = styles;
    const {fade1, top1, text1, fade2, top2, text2} = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={shift}>
          <Text>WoWs Info</Text>
          <View style={center}>
            <Animated.Text style={[t1, {top: top1, opacity: fade1}]}>
              {text1}
            </Animated.Text>
            <Animated.Text style={[t2, {top: top2, opacity: fade2}]}>
              {text2}
            </Animated.Text>
          </View>
        </View>
      </View>
    );
  }

  animate = () => {
    let shift_animation = Animated.parallel([
        Animated.timing(
        // Animate value over time
        this.state.fade1, // The value to drive
        {
          toValue: 0, // Animate to final value of 1
        },
      ),
      Animated.timing(
        // Animate value over time
        this.state.top1, // The value to drive
        {
          toValue: -20, // Animate to final value of 1
        },
      ),
      Animated.timing(
        // Animate value over time
        this.state.fade2, // The value to drive
        {
          toValue: 1, // Animate to final value of 1
        },
      ),
      Animated.timing(
        // Animate value over time
        this.state.top2, // The value to drive
        {
          toValue: 0, // Animate to final value of 1
        },
      ),
    ]);

    let final_animation = Animated.sequence([
      Animated.delay(1000),
      shift_animation,
    ]);

    Animated.loop(final_animation).start(() => {
      const {text1, text2} = this.state;
      // Update text
      this.setState({
        text1: text2,
        text2: text1,
      });
    });
  };
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
