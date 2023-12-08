import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, Alert } from 'react-native';

const LoginPage = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.254.106:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password
        }),
      });

      const result = await response.json();
                console.log("Success:", result);
                if(response.status === 200){
                    await navigation.navigate("Home");

                    setUsername(''),
                    setPassword('')
                }
                
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };
  return (
    <ImageBackground
      source={{ uri: 'https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg' }}
      style={{ width, height }}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>LOGIN</Text>
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AccountRecovery')}
        >
          <Text style={styles.buttonText}>ACC RECOV</Text>
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
    backgroundColor: 'white',
    borderRadius: 10,
  },

  button: {
    backgroundColor: '#8B4513',
    padding: 10,
    marginBottom: 10,
    width: 110,
    alignItems: 'center',
    borderRadius: 10,
  },

  backButton: {
    backgroundColor: '#8B4513',
    padding: 10,
    marginBottom: 10,
    width: 110,
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    left: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default LoginPage;
