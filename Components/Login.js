import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity, ImageBackground } from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

const image = { url: '/Users/virginialadd/projects/switty/ios/assets/run-bg.jpg' };

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={ styles.container }>
    <ImageBackground source={ image }  style={ styles.image } >
      <View>
        <TouchableOpacity
        style={ styles.buttonTop }
        onPress={() => navigation.navigate('Train')}
        >
          <Text style={{ fontSize: 32, color: 'white' }} >Train Today</Text>
        </TouchableOpacity>
      </View>
      <Separator />
      <View>
        <TouchableOpacity
        style={ styles.buttonBottom }
        onPress={() => navigation.navigate('Run')}
        >
          <Text style={{ fontSize: 32, color: 'white' }} >Run Today</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginHorizontal: 16,
    color: '#000',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    height: 20,
    width: '90%',
    marginLeft: '10%'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    marginTop: '-30%',
    width: '110%',
    marginLeft: '-10%',
    height: '110%'
  },
  buttonTop: {
    height: 100,
    backgroundColor: 'black',
    alignItems: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    marginTop: '80%',
    justifyContent:'center',
    width: '90%',
    marginLeft: '10%'
  },
  buttonBottom: {
    height: 100,
    backgroundColor: 'black',
    alignItems: 'center',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent:'center',
    marginTop: 17,
    width: '90%',
    marginLeft: '10%'
  },
});
