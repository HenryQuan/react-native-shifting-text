/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.words = [
      'RE',
      'Origin',
      'Ultimate',
      'Pro',
      'Gold',
      'Ultra',
      'White',
      'Black',
      'Free',
      'X',
      'Y',
      'Z',
      '>_<',
      '#',
      '0_0',
      '',
      '^_^',
      '★',
      'α',
      'θ',
      'Ω',
      'Ф',
      '∞',
      '░',
      '( ͡° ͜ʖ ͡°)',
      '¯_(ツ)_/¯',
      '2018',
      '?!',
      '!!',
      '?!',
      '2017',
      '2016',
      '2019',
      '2020',
      '2021',
      '2022',
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
      'X',
      'DD',
      'BB',
      'CV',
      'CA',
      'SUB',
    ];

    this.shuffleArray(this.words);
    this.index = 1;
    this.state = {
      // Label 1
      fade1: new Animated.Value(1),
      top1: new Animated.Value(0),
      text1: this.words[this.index - 1],
      // Label 2
      fade2: new Animated.Value(0),
      top2: new Animated.Value(20),
      text2: this.words[this.index],
    };
  }

  /**
   * from https://stackoverflow.com/a/12646864
   * @param {*} array 
   */
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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
      Animated.delay(2000),
      shift_animation,
    ]);

    final_animation.start(() => {
      // Reset and loop
      const {fade1, fade2, top1, top2, text1, text2} = this.state;
      fade1.setValue(1);
      fade2.setValue(0);
      top1.setValue(0);
      top2.setValue(20);

      if (this.index === this.words.length) this.index = 1;

      this.setState({
        text1: text2,
        text2: this.words[this.index],
      });

      this.index++;

      console.log(text1, text2);
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
