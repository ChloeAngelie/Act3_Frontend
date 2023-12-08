import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Text, Button } from 'react-native-paper';

const LandingPage = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');

  return (
    <ImageBackground
      source={{ uri: 'https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg' }}
      style={{ width, height }}
    >
      <View style={styles.overlay}>
        <Text style={styles.titleText}>COFFEE PARADISE</Text>
        <Button mode="contained" onPress={() => navigation.navigate('Login')} style={styles.button}>
          GET STARTED
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  button: {
    marginTop: 40,
    width: 200,
    backgroundColor: '#8B4513',
  },
});

export default LandingPage;
