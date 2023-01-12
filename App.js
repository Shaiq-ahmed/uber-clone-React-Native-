import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TailwindProvider } from "tailwindcss-react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}> 
      <NavigationContainer>
        <TailwindProvider>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
              <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
          </SafeAreaProvider>
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}
