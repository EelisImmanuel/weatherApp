/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './components/header';
import ShowWeather from './components/showWeather';

export default class App extends Component {
  
  render() {
    return (
      <View 
        style={{
        flex: 1,
         }} 
      >
      <Header />
          <ShowWeather />
      </View>
      
    );
  }
  
  }
