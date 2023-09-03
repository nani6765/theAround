import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

import { getStyle } from '../style';
import { textColor } from '../style/variable';
/**
 * @see https://reactnative.dev/docs/text-style-props?language=typescript
 */

interface TabTextProp {
  label: string;
  isFocused: boolean;
}

function TabText({ label, isFocused }: TabTextProp) {
  const TextStyle: StyleProp<TextStyle> = {
    ...getStyle('tabText'),
    color: isFocused ? textColor.THEME : textColor.DISABLED,
  };

  return <Text style={TextStyle}>{`${label}`}</Text>;
}

export default TabText;
