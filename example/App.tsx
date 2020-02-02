import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ShiftingText } from './src/ShiftingText';

export default class App extends React.Component {
  render() {
    const { root, prefixStyle, title } = styles;
    return (
      <View style={root}>
        <ShiftingText titles={['Ultimate', 'Pro', 'ULtra', 'Go', 'RE', 'XYZ', 'α', 'θ', 'Ω', '#']} 
          titleStyle={title}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row'
  },
  prefixStyle: {
    fontSize: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})