import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs/src/types';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import TabBar from './components/TabBar';
import WebViewScreen from './screens/WebViewScreen';

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
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => <TabBar {...props} />}
        screenOptions={defaultScreenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="webView" component={WebViewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const defaultScreenOptions: BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
