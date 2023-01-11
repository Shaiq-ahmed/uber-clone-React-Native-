import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
    <View>
      <Text>Open up App.js to start working on your </Text>
    </View>
    </Provider>
  );
}


