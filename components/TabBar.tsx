import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';
import { View, TouchableOpacity } from 'react-native';

import TabText from './TabText';
import { getStyle } from '../style';
/**
 * @see https://reactnavigation.org/docs/bottom-tab-navigator/
 */
function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={`${label}-${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={getStyle('bottomTabBar')}>
            <TabText label={`${label}`} isFocused={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
