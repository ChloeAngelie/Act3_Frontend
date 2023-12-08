import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const HomePage = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');

  return (
    <ImageBackground
      source={{ uri: 'https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg' }}
      style={{ width, height }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>COFFEE PARADISE</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },

  title: {
    fontSize: 32,
    marginBottom: 30,
    color: '#333',
  },

  button: {
    backgroundColor: '#8B4513',
    padding: 10,
    marginBottom: 10,
    width: 110,
    alignItems: 'center',
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default HomePage;
