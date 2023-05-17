import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const SpotifyApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Spotify</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require('./background.jpg')}
          style={styles.logo}
        />
        <Text style={styles.description}>
          Listen to your favorite music anytime, anywhere.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Open Spotify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#1DB954',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 24,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#1DB954',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SpotifyApp;
