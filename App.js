import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter)
  }, [counter])

  const handleClick = () => setCounter(prevState => prevState + 1)

  return (
    <View style={styles.container}>
      <Text style={styles}>You click {counter} times</Text>
      <Button title='Click me' onPress={handleClick} />
      <StatusBar style="auto" />
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
