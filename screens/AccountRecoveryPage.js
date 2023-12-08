import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const AccountRecoveryPage = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');

  return (
    <ImageBackground
      source={{ uri: 'https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg' }}
      style={{ width, height }}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title}>Account Recovery</Text>
          <Text style={styles.subtitle}>Enter your email to recover your account</Text>
          <TextInput placeholder="Email" style={styles.input} />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Recover Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },

  backButton: {
    backgroundColor: '#8B4513',
    padding: 10,
    width: 110,
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    left: 10,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  input: {
    height: 42,
    borderColor: '#8B4513',
    borderWidth: 1,
    marginBottom: 30,
    padding: 10,
    width: 200,
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

  subtitle: {
    marginBottom: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B4513',
  },
});

export default AccountRecoveryPage;

