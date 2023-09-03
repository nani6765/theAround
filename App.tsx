import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Button } from 'react-native';

import HomePage from './screens/HomeScreen';
import WebViewPage from './screens/WebViewScreen';
// import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="bottom"></Stack.Navigator>
    </NavigationContainer>
  );
}

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
