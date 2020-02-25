/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Input} from 'react-native-elements';

class App extends Component {
  state = {};

  handleForm = e => {
    console.log('form handler is running');
  };

  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.headerText}>Everyone from Star Wars</Text>
        <Input
          inputStyle={styles.formText}
          label="Search for a character:"
          onChangeText={e => this.handleForm(e)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFFFFF',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
  },
  headerText: {
    marginTop: 32,
    fontSize: 24,
    fontWeight: '600',
    color: '#00A5FF',
  },
  formText: {
    color: '#FFFFFF',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
