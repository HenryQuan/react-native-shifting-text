import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ShiftingText } from './src/ShiftingText';

export default class App extends React.Component {
  render() {
    const { root, prefixStyle, title } = styles;
    return (
      <View style={root}>
        <ShiftingText titles={['Ultimate', 'Pro', 'Ultra', 'Go', 'Gold', 'RE']} 
          titleStyle={title} prefix={<Text style={prefixStyle}>WoWs Info</Text>}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  prefixStyle: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 28,
  }
})