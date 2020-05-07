import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity, ImageBackground } from 'react-native';


export default function Timer() {
  return (
    <SafeAreaView style={ styles.container }>
      <View>
        <TouchableOpacity style={ styles.buttonTop } >
          <Text style={{ fontSize: 32, color: 'white' }}>Start Timer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#057598',
  },
  buttonTop: {
    backgroundColor: 'black',
    height: 300,
    width: 300,
  }
});
