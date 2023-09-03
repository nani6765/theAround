import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

/**
 * @see https://reactnative.dev/docs/text-style-props?language=typescript
 */

interface TabTextProp {
  label: string;
  isFocused: boolean;
}

function TabText({ label, isFocused }: TabTextProp) {
  const TextStyle: StyleProp<TextStyle> = {
    display: 'flex',
    padding: 8,
    fontSize: 16,
    color: isFocused ? '#f4511e' : '#c6c6c6',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return <Text style={TextStyle}>{`${label}`}</Text>;
}

export default TabText;
