import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Button } from 'react-native';

import WebViewScreen from './screens/WebViewScreen';
// import HomePage from './screens/HomeScreen';
// import WebViewPage from './screens/WebViewScreen';
// import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iure
      alias doloribus sapiente. Ipsa temporibus incidunt a exercitationem
      voluptatibus libero explicabo inventore dolor? Nisi totam dignissimos
      deleniti ipsum tempora ipsam.
    </div>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="webView">
        <Stack.Screen component={HomeScreen} name="home" />
        <Stack.Screen component={WebViewScreen} name="webView" />
      </Stack.Navigator>
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
