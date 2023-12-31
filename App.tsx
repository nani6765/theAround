import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs/src/types';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { RecoilRoot } from 'recoil';

import TabBar from './components/TabBar';
import HomeScreen from './screens/HomeScreen';
import WebViewScreen from './screens/WebViewScreen';
import { bgColor } from './style/variable';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBar={props => <TabBar {...props} />}
          screenOptions={defaultScreenOptions}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen
            name="webView"
            component={WebViewScreen}
            // webView에선 header를 숨김
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
        <Toast />
      </NavigationContainer>
    </RecoilRoot>
  );
}

const defaultScreenOptions: BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: bgColor.THEME,
  },
  headerTintColor: bgColor.DEFAULR,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
