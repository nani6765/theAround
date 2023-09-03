import React from 'react';
import { View, Text } from 'react-native';

import { getStyle } from '../../style';

function HeaderView() {
  return (
    <View style={getStyle('header')}>
      <Text style={getStyle('headerText')}>TODO</Text>
    </View>
  );
}

export default HeaderView;
