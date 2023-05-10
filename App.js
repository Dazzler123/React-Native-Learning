import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Alert, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is my first ever React Native app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
//        onPress={onPressLearnMore}
        title="Learn More"
        color="black"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
