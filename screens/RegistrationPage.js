import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const RegistrationPage = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await fetch('http://192.168.254.106:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          password: password
        }),
      });

      const result = await response.json();
                console.log("Success:", result);
                if(response.status === 200){
                    await navigation.navigate("Login");

                    setFullName(''),
                    setEmail(''),
                    setPassword('')
                }
                
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>REGISTER</Text>
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleRegistration}>
            <Text style={styles.buttonText}>REGISTER</Text>
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

  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
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

  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default RegistrationPage;
